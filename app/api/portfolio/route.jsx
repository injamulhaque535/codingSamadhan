import Portfolio from "@/models/portfolio";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const { siteId, siteName, siteURL, siteCategory, thumbnail, siteImages } =
    await request.json();
  await connectDB();
  await Portfolio.create({
    siteId,
    siteName,
    siteURL,
    siteCategory,
    thumbnail,
    siteImages,
  });
  return NextResponse.json(
    { message: "Portfolio Item Created" },
    { status: 200 }
  );
};

export const GET = async () => {
  await connectDB();
  return NextResponse.json(await Portfolio.find());
};
