export const flattenObject = (obj) => {
  const flattened = {
    ...obj,
    ...obj.address,
    ...obj.baths,
    ...obj.amenities,
    ...obj.standoutAmenities,
    ...obj.safetyAmenities,
  };

  delete flattened.address;
  delete flattened.baths;
  delete flattened.amenities;
  delete flattened.standoutAmenities;
  delete flattened.safetyAmenities;
  delete flattened.photos;

  return flattened;
};
