import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path == "/login" || path == "/signup";

  // .? so if cookie is not there it's return undefined and doesn't crash the server
  const token = request.cookies.get("token")?.value || '' 

  if(isPublicPath && token){
    // next js need absolute url to redirect
    return NextResponse.redirect(new URL('/profile',request.nextUrl))
  }

  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }

}
 
// matcher allows you to filter Middleware to run on specific paths.
export const config = {
  matcher: [
    '/',
    '/profile',
    '/profile/:path*',
    '/login',
    '/signup'
  ],
}