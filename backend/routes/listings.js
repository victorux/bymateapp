import express from "express";
import { createListing, publishListing } from "../controllers/listing.js";

const router = express.Router();

// create a new empty listing in the database with draft status
router.post("/create-new", createListing);

// publish a listing
router.put("/publish-listing", publishListing);

export default router;
