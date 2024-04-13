import { db } from "../connect.js";

export const createListing = (req, res) => {
  const { user_id, created_at } = req.body;

  // Insert a new listing into the database
  db.query("INSERT INTO property () VALUES ()", function (err, result) {
    if (err) {
      return res
        .status(500)
        .json({ message: "An error occurred while creating the property" });
    }
    // Get the ID of the newly created property
    const property_id = result.insertId;
    // Insert a new listing into the database
    const newListing = { property_id, user_id, created_at };
    db.query("INSERT INTO listing set ?", newListing, function (err, result) {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "An error occurred while creating the listing" });
      }
      //   Return the response with the newly created listing ID
      return res.status(201).json({
        message: `Listing created successfully, with listing id:${result.insertId}`,
        listingId: result.insertId,
      });
    });
  });
};
