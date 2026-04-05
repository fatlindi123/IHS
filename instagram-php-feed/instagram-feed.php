<?php
header('Content-Type: application/json; charset=utf-8');

$accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
$instagramUserId = 'YOUR_INSTAGRAM_USER_ID';
$limit = 6;

$url = "https://graph.facebook.com/v23.0/{$instagramUserId}/media"
    . "?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
    . "&limit={$limit}"
    . "&access_token={$accessToken}";

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    echo json_encode([
        'success' => false,
        'message' => 'cURL error',
        'error' => $error,
    ]);
    exit;
}

$data = json_decode($response, true);

if ($httpCode !== 200 || !isset($data['data'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Instagram API error',
        'response' => $data,
    ]);
    exit;
}

$posts = array_map(function ($item) {
    return [
        'id' => $item['id'] ?? '',
        'caption' => $item['caption'] ?? '',
        'media_type' => $item['media_type'] ?? '',
        'media_url' => $item['media_url'] ?? ($item['thumbnail_url'] ?? ''),
        'permalink' => $item['permalink'] ?? '#',
        'timestamp' => $item['timestamp'] ?? '',
    ];
}, $data['data']);

echo json_encode([
    'success' => true,
    'posts' => $posts,
]);
