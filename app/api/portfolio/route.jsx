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

  // get filtered item
  let filteredPortfolioItems = Portfolio.find(queryParam);

  // sort
  const sort = url.searchParams.get("sort");
  // sorting by latest and oldest
  if (sort === "latest") {
    filteredPortfolioItems.sort({ createdAt: -1 });
  } else if (sort === "oldest") {
    filteredPortfolioItems.sort({ createdAt: +1 });
  }
  const PortfolioItems = await filteredPortfolioItems;
  // sort by asc and dsc
  if (sort === "a-z") {
    PortfolioItems.sort((a, b) => {
      return a.siteName.toLowerCase().localeCompare(b.siteName.toLowerCase());
    });
  } else if (sort === "z-a") {
    PortfolioItems.sort((a, b) => {
      return b.siteName.toLowerCase().localeCompare(a.siteName.toLowerCase());
    });
  }

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
