import { url } from 'inspector'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (true) {
        console.log('Middleware is called');
        let cc = request;
        // return NextResponse.redirect("/login");
        return NextResponse.redirect(new URL('', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}