import Portfolio from "@/models/portfolio";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // connect with databse
  await connectDB();

  const url = new URL(request.url);
  const queryParam = {};

  // filter by siteid
  const siteid = url.searchParams.get("siteId") || "";
  if (siteid) {
    queryParam.siteId = siteid;
  }

  // search by name
  const name = url.searchParams.get("siteName") || "";
  if (name) {
    queryParam.siteName = { $regex: name, $options: "i" };
  }

  // filter by category
  const category = url.searchParams.get("siteCategory") || "";

  if (category) {
    queryParam.siteCategory = category;
  }

  // get filtered item
  let filteredPortfolioItems = Portfolio.find(queryParam);

  // sort
  const sort = url.searchParams.get("sort");
  if (sort === "latest") {
    filteredPortfolioItems.sort({ createdAt: -1 });
  } else if (sort === "oldest") {
    filteredPortfolioItems.sort({ createdAt: +1 });
  } else if (sort === "a-z") {
    filteredPortfolioItems.sort({ siteName: +1 });
  } else if (sort === "z-a") {
    filteredPortfolioItems.sort({ siteName: -1 });
  }

  // pagination
  const totalPfItemsCount = await Portfolio.countDocuments(queryParam);
  let page = url.searchParams.get("page") || "";
  let perPage = 9;
  const skip = (page - 1) * perPage;
  if (page !== "") {
    filteredPortfolioItems.limit(perPage).skip(skip);
  }

  // get final filtered items
  const PortfolioItems = await filteredPortfolioItems;
  // console.log(PortfolioItems);
  return NextResponse.json({
    totalPfItems: totalPfItemsCount,
    PortfolioItems,
  });
};

// handle post request to
// create items
export const POST = async (request) => {
  const { siteId, siteName, siteURL, siteCategory, thumbnail, siteImages } =
    await request.json();
  await connectDB();
  await Portfolio.insertMany({
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
