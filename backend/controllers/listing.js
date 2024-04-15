import { db } from "../connect.js";
import { flattenObject } from "../utils/flattenObject.js";

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

// Publish new listing
export const publishListing = (req, res) => {
  const clientObject = req.body.listingData;
  const listingId = req.body.listingId;
  const newListingData = flattenObject(clientObject);
  // get the property_id from the table listing where id of listing is litingId
  db.query(
    "SELECT property_id FROM listing WHERE id = ?",
    listingId,
    function (err, result) {
      if (err) {
        return res.status(500).json({
          message: "An error occurred while fetching the property_id",
        });
      }

      const property_id = result[0].property_id;
      // Update the property table with id = property_id
      db.query(
        "UPDATE property SET ? WHERE id = ?",
        [newListingData, property_id],
        function (err, result) {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "An error occurred while updating the property table",
            });
          }
          console.log(result);
        }
      );
    }
  );
};
