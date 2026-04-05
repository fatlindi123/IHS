export interface InstagramPost {
  id: string
  caption: string
  mediaType: string
  mediaUrl: string
  permalink: string
  timestamp: string
}

export interface InstagramFeedResult {
  posts: InstagramPost[]
  isLive: boolean
  status: 'live' | 'missing_config' | 'fetch_error' | 'empty_feed'
  message: string
  debug?: {
    hasAccessToken: boolean
    hasInstagramUserId: boolean
    tokenLength?: number
    userIdLength?: number
    requestUrl?: string
    responseStatus?: number
    apiError?: string
  }
}

const fallbackInstagramPosts: InstagramPost[] = [
  {
    id: 'fallback-1',
    caption: 'Instagram sync preview. Your latest Chronic Care Objects posts will appear here after Meta API credentials are connected.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    permalink: 'https://www.instagram.com/chroniccareobjects/',
    timestamp: '2026-04-04T12:00:00.000Z',
  },
  {
    id: 'fallback-2',
    caption: 'This section is ready for automatic website updates whenever a new Instagram post is published.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    permalink: 'https://www.instagram.com/chroniccareobjects/',
    timestamp: '2026-04-03T12:00:00.000Z',
  },
  {
    id: 'fallback-3',
    caption: 'Connect the Instagram Business account to replace these placeholders with live content from your real feed.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    permalink: 'https://www.instagram.com/chroniccareobjects/',
    timestamp: '2026-04-02T12:00:00.000Z',
  },
]

function normalizeInstagramCaption(caption?: string) {
  if (!caption) {
    return 'New update from Chronic Care Objects.'
  }

  return caption.length > 160 ? `${caption.slice(0, 157)}...` : caption
}

export async function getInstagramFeed(limit = 6): Promise<InstagramFeedResult> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
  const instagramUserId = process.env.INSTAGRAM_USER_ID

  if (!accessToken || !instagramUserId) {
    return {
      posts: fallbackInstagramPosts.slice(0, limit),
      isLive: false,
      status: 'missing_config',
      message: 'Instagram API credentials are missing. Add INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID to .env.local.',
      debug: {
        hasAccessToken: Boolean(accessToken),
        hasInstagramUserId: Boolean(instagramUserId),
        tokenLength: accessToken?.length,
        userIdLength: instagramUserId?.length,
      },
    }
  }

  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'permalink',
    'thumbnail_url',
    'timestamp',
  ].join(',')

  const url = `https://graph.facebook.com/v23.0/${instagramUserId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => null)
      const apiError = payload?.error?.message || `Instagram request failed with ${response.status}`

      return {
        posts: fallbackInstagramPosts.slice(0, limit),
        isLive: false,
        status: 'fetch_error',
        message: 'Instagram API request failed. Check the access token, account type, permissions, and Instagram user ID.',
        debug: {
          hasAccessToken: true,
          hasInstagramUserId: true,
          tokenLength: accessToken.length,
          userIdLength: instagramUserId.length,
          requestUrl: `https://graph.facebook.com/v23.0/${instagramUserId}/media?fields=${fields}&limit=${limit}&access_token=***`,
          responseStatus: response.status,
          apiError,
        },
      }
    }

    const payload = await response.json()
    const items = Array.isArray(payload.data) ? payload.data : []

    const posts = items
      .filter((item: any) => item.media_type !== 'VIDEO' || item.thumbnail_url || item.media_url)
      .map((item: any) => ({
        id: item.id,
        caption: normalizeInstagramCaption(item.caption),
        mediaType: item.media_type,
        mediaUrl: item.media_url || item.thumbnail_url,
        permalink: item.permalink || 'https://www.instagram.com/chroniccareobjects/',
        timestamp: item.timestamp || new Date().toISOString(),
      }))
      .filter((item: InstagramPost) => Boolean(item.mediaUrl))

    if (!posts.length) {
      return {
        posts: fallbackInstagramPosts.slice(0, limit),
        isLive: false,
        status: 'empty_feed',
        message: 'The Instagram API responded, but no usable posts were returned for the current account.',
        debug: {
          hasAccessToken: true,
          hasInstagramUserId: true,
          tokenLength: accessToken.length,
          userIdLength: instagramUserId.length,
          requestUrl: `https://graph.facebook.com/v23.0/${instagramUserId}/media?fields=${fields}&limit=${limit}&access_token=***`,
          responseStatus: response.status,
        },
      }
    }

    return {
      posts,
      isLive: true,
      status: 'live',
      message: 'Instagram posts are loading from the live Meta API feed.',
      debug: {
        hasAccessToken: true,
        hasInstagramUserId: true,
        tokenLength: accessToken.length,
        userIdLength: instagramUserId.length,
        requestUrl: `https://graph.facebook.com/v23.0/${instagramUserId}/media?fields=${fields}&limit=${limit}&access_token=***`,
        responseStatus: response.status,
      },
    }
  } catch {
    return {
      posts: fallbackInstagramPosts.slice(0, limit),
      isLive: false,
      status: 'fetch_error',
      message: 'Instagram API request failed. Check the access token, account type, permissions, and Instagram user ID.',
      debug: {
        hasAccessToken: true,
        hasInstagramUserId: true,
        tokenLength: accessToken.length,
        userIdLength: instagramUserId.length,
        requestUrl: `https://graph.facebook.com/v23.0/${instagramUserId}/media?fields=${fields}&limit=${limit}&access_token=***`,
      },
    }
  }
}
