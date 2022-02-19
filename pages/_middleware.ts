import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("This is All Middleware");
  //   ua는 유저의 browser정보등을 볼 수 있다
  if (req.ua?.isBot) {
    return new Response("You are Bot", { status: 403 });
  }
  if (!req.cookies) {
    return NextResponse.redirect("/");
  }
}
