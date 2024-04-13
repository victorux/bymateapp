export interface FormData {
  propertyType: 'house' | 'apartment' | string
  spaceType: 'Entire' | 'Private' | 'Shared' | null
  address: {
    county: string
    street: string
    city: string
    eircode: string
  }
  baths: {
    private: number
    shared: number
    dedicated: number
  }
  amenities: {
    furnished: boolean
    wifi: boolean
    kitchen: boolean
    washingmachine: boolean
    heating: boolean
    parking: boolean
    airconditioning: boolean
    livingroom: boolean
    tv: boolean
    teakettle: boolean
    toaster: boolean
    microwave: boolean
    oven: boolean
    coffeemaker: boolean
    cleaningproducts: boolean
  }
  standoutAmenities: {
    patio: boolean
    balcony: boolean
    pool: boolean
    piano: boolean
    gym: boolean
    cleaningservice: boolean
    boardgames: boolean
    books: boolean
  }
  safetyAmenities: {
    smokealarm: boolean
    firstaidkit: boolean
    fireextinguisher: boolean
    cameras: boolean
  }
  photos: string[]
  title: string
  description: string
  price: number
  deposit: number
  bills: 'included' | 'partial' | null
  duration: 'flex' | 'fix' | 'year'
  moveInDate: string
  moveOutDate: string
  preferences: string[]
  references: string[]
}

export interface ContextProps {
  readonly formData: FormData | null
  readonly updateFormData: (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => void
  readonly title: { [key: number]: string }
  readonly page: number
  readonly setPage: (page: number) => void
}
