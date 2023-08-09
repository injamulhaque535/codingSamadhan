// const mongoose = require(mongoose);
import mongoose, { Schema } from "mongoose";

const PortfolioSchema = new Schema(
  {
    siteId: String,
    siteName: String,
    siteURL: String,
    siteCategory: String,
    thumbnail: String,
    siteImages: [{ src: String }],
  },
  { timestamps: true }
);
const Portfolio =
  mongoose.models.PortfolioItems ||
  mongoose.model("PortfolioItems", PortfolioSchema);

export default Portfolio;
