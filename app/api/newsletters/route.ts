import { NextResponse } from 'next/server'

export async function GET() {
  const apiSecret = process.env.CONVERTKIT_API_SECRET

  if (!apiSecret) {
    return NextResponse.json({ broadcasts: [] })
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/broadcasts?api_secret=${apiSecret}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    )

    if (!res.ok) {
      return NextResponse.json({ broadcasts: [] })
    }

    const data = await res.json()

    // Filter to only published broadcasts and map to clean shape
    const broadcasts = (data.broadcasts || [])
      .filter((b: any) => b.published_at)
      .sort(
        (a: any, b: any) =>
          new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      )
      .map((b: any) => ({
        id: b.id,
        subject: b.subject,
        description: b.description,
        published_at: b.published_at,
        thumbnail_url: b.thumbnail_url,
      }))

    return NextResponse.json({ broadcasts })
  } catch {
    return NextResponse.json({ broadcasts: [] })
  }
}
