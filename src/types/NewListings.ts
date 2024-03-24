export interface NewListings {
  propertyType:
    | 'House'
    | 'Apartment'
    | 'Condo'
    | 'Townhouse'
    | 'Loft'
    | 'Guesthouse'
    | 'Other'
  spaceType: 'Entire place' | 'Private room' | 'Shared room'
  county: string
  street: string
  city: string
  eircode: string
  bathsavailable: {
    private: number
    shared: number
    dedicated: number
  }
  amenities: 'Wifi' | 'Kitchen' | 'Shampoo' | 'Heating' | 'Air conditioning'
  standoutAmenities:
    | 'Wifi'
    | 'Kitchen'
    | 'Shampoo'
    | 'Heating'
    | 'Air conditioning'
  safetyAmenities:
    | 'Smoke detector'
    | 'First aid kit'
    | 'Fire extinguisher'
    | 'Lock on bedroom door'
  photos: string[]
  title: string
  description: string
  price: number
  deposit: number | null
  bills: 'Included' | 'Not included' | 'Partially included'
  duration: 'Flexible' | 'Fixed' | '12 months' | '6 months' | '3 months'
  moveInDate: string
  moveOutDate: string
  preferences: string[]
  references: string[]
}
