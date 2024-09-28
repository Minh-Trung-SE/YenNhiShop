import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log("oOOO");

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/dashboard/:path',
    ],
}