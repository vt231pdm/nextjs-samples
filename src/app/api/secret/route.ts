import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const posts = await prisma.testPost.findMany();
  console.log(process.env.SECRET_WORD);
  return NextResponse.json(posts);
}
