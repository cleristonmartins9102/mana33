import axios from 'axios'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get('session')?.value || null
  const loginUrl = new URL('/login', request.url)
  if (!cookieValue) {
    return NextResponse.redirect(loginUrl) 
  } else {
    try {
      const { token } = JSON.parse(Buffer.from(cookieValue, 'base64').toString('utf-8'))
      const response = await axios.request({ method: 'POST', url: 'http://127.0.0.1:5050/api/auth/validate', data: { token }})
      return NextResponse.next()
    } catch (error) {
      console.log((error as any).status)
      return NextResponse.redirect(loginUrl) 
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/hub',
}