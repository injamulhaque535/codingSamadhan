import Portfolio from "@/models/portfolio";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // connect with databse
  await connectDB();

  const url = new URL(request.url);
  const queryParam = {};

  // filter by siteid
  const siteid = url.searchParams.get("siteId");
  if (siteid) {
    queryParam.siteId = siteid;
  }

  // search by name
  const name = url.searchParams.get("siteName");
  if (name) {
    queryParam.siteName = { $regex: name, $options: "i" };
  }

  // filter by category
  const category = url.searchParams.get("siteCategory");
  if (category) {
    queryParam.siteCategory = category;
  }

  // sorting by asc and dsc
  const sort = url.searchParams.get("sort");
  if (sort == "asc") {
    console.log("I am ASC");
  } else if (sort == "dsc") {
    console.log("I am DSC");
  }

  const PortfolioItems = await Portfolio.find(queryParam);

  return NextResponse.json({ PortfolioItems });
};

// handle post request to
// create item
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
