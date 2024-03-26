export interface NewListings {
  title: { [key: number]: string }
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  data: {
    propertyType:
      | 'House'
      | 'Apartment'
      | 'Condo'
      | 'Townhouse'
      | 'Loft'
      | 'Guesthouse'
      | 'Other'
      | null
    spaceType: 'Entire place' | 'Private room' | 'Shared room' | null
    county: string
    street: string
    city: string
    eircode: string
    bathsavailable: {
      private: number
      shared: number
      dedicated: number
    }
    amenities:
      | 'Wifi'
      | 'Kitchen'
      | 'Shampoo'
      | 'Heating'
      | 'Air conditioning'
      | null
    standoutAmenities:
      | 'Wifi'
      | 'Kitchen'
      | 'Shampoo'
      | 'Heating'
      | 'Air conditioning'
      | null
    safetyAmenities:
      | 'Smoke detector'
      | 'First aid kit'
      | 'Fire extinguisher'
      | 'Lock on bedroom door'
      | null
    photos: string[]
    title: string
    description: string
    price: number
    deposit: number | null
    bills: 'Included' | 'Not included' | 'Partially included' | null
    duration:
      | 'Flexible'
      | 'Fixed'
      | '12 months'
      | '6 months'
      | '3 months'
      | null
    moveInDate: string
    moveOutDate: string
    preferences: string[]
    references: string[]
  }
}
