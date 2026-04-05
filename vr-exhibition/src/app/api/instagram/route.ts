import { NextResponse } from 'next/server'
import { getInstagramFeed } from '../../../lib/instagram'

export const revalidate = 300

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const requestedLimit = Number(searchParams.get('limit') || '6')
  const limit = Number.isFinite(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 12) : 6

  const feed = await getInstagramFeed(limit)

  return NextResponse.json(feed, {
    headers: {
      'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
    },
  })
}
