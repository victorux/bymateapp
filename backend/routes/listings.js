import express from "express";
import { createListing } from "../controllers/listing.js";

const router = express.Router();

// create a new listing in the database with draft status
router.post("/create-new", createListing);

export default router;
