import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const userThem = request.cookies.get("theme");
  if (!userThem) {
    response.cookies.set("theme", "light");
  }
  response.headers.set("custom-header", "custom-value");
  return response;

  // if (request.nextUrl.pathname === "/profile") {
  // return NextResponse.redirect(new URL("/dashboard", request.url));
  //   return NextResponse.rewrite(new URL("/dashboard", request.url));
  // }

  // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
// };
