import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const headersList = headers();

  console.log("Request Header", requestHeader.get("Authorization"));
  console.log("Header List", headersList.get("Authorization"));

  console.log("Cookie from request : ", request.cookies.get("lang"));

  cookies().set("my-set", "settings");

  const cookie = cookies().get("my-set");
  console.log("Cookie from Next Cookies : ", cookie);

  return new Response("<h1>Profile data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "lang=val1",
    },
  });
}
