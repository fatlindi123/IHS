async function loadInstagramPosts() {
  const container = document.getElementById('instagram-feed');
  const status = document.getElementById('instagram-status');

  try {
    const response = await fetch('instagram-feed.php', {
      method: 'GET',
    });

    const result = await response.json();

    if (!result.success) {
      status.textContent = 'Could not load Instagram posts. Check your token, user ID, and API permissions.';
      container.innerHTML = '';
      console.error(result);
      return;
    }

    status.textContent = 'Instagram posts loaded successfully.';

    container.innerHTML = result.posts.map((post) => {
      const safeCaption = (post.caption || 'Instagram post').replace(/"/g, '&quot;');
      const shortCaption = post.caption && post.caption.length > 120
        ? `${post.caption.substring(0, 120)}...`
        : (post.caption || 'New Instagram update.');

      return `
        <article class="instagram-card">
          <div class="instagram-image-wrap">
            <img src="${post.media_url}" alt="${safeCaption}">
          </div>
          <div class="instagram-content">
            <p class="instagram-caption">${shortCaption}</p>
            <a class="instagram-link" href="${post.permalink}" target="_blank" rel="noopener noreferrer">
              View on Instagram
            </a>
          </div>
        </article>
      `;
    }).join('');
  } catch (error) {
    status.textContent = 'Error loading Instagram posts.';
    container.innerHTML = '';
    console.error(error);
  }
}

loadInstagramPosts();
