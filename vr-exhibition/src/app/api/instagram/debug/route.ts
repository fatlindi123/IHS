import { NextResponse } from 'next/server'
import { getInstagramFeed } from '../../../../lib/instagram'

export async function GET() {
  const feed = await getInstagramFeed(1)

  return NextResponse.json({
    status: feed.status,
    message: feed.message,
    debug: feed.debug ?? null,
    samplePostCount: feed.posts.length,
    isLive: feed.isLive,
  })
}
