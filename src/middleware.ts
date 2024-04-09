import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  beforeAuth() {
    // console.log("Clerk Middlware running on every load!!!!!!! BEFORE");
  },
  afterAuth() {
    // console.log("Clerk Middlware running on every load!!!!!!! AFTER");
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
