import { useState, createContext } from 'react'
import { ContextProps, FormData } from '../types/NewListings'

const FormContext = createContext<ContextProps>({
  formData: {
    propertyType: '',
    spaceType: null,
    address: {
      county: '',
      street: '',
      city: '',
      eircode: '',
    },
    baths: {
      private: 0,
      shared: 0,
      dedicated: 0,
    },
    amenities: {
      furnished: false,
      wifi: false,
      kitchen: false,
      washingmachine: false,
      heating: false,
      parking: false,
      airconditioning: false,
      livingroom: false,
      tv: false,
      teakettle: false,
      toaster: false,
      microwave: false,
      oven: false,
      coffeemaker: false,
      cleaningproducts: false,
    },
    standoutAmenities: {
      patio: false,
      balcony: false,
      pool: false,
      piano: false,
      gym: false,
      cleaningservice: false,
      boardgames: false,
      books: false,
    },
    safetyAmenities: {
      smokealarm: false,
      firstaidkit: false,
      fireextinguisher: false,
      cameras: false,
    },
    photos: [],
    title: '',
    description: '',
    price: 0,
    deposit: 0,
    bills: null,
    duration: 'flex',
    moveInDate: '',
    moveOutDate: '',
    preferences: [],
    references: [],
  },
  title: {},
  updateFormData: () => null,
})

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const title: { [key: number]: string } = {
    // Step 1
    0: 'Step 1: About the Property',
    1: 'Which of these best describes your place?',
    2: 'What type of place will guests have?',
    3: 'Where is your place located?',
    4: 'What kind of bathrooms available to renter',
    // Step 2: 'What amenities do you offer?',
    5: 'Step 2: Amenities',
    6: 'Amenities, Standout Amenities, Safety items',
    7: 'Photos',
    // Step 3: 'Title & Description, price',
    8: 'Step 3: Title & Description, price',
    9: 'Title',
    10: 'Description',
    11: 'Price, Deposit, Bills',
    12: 'Duration, Move-in Date, Move-out Date',
    // Last Step
    13: 'Preview and Publish',
  }

  const [formData, setData] = useState({
    propertyType: '',
    spaceType: null,
    address: {
      county: '',
      street: '',
      city: '',
      eircode: '',
    },
    baths: {
      private: 0,
      shared: 0,
      dedicated: 0,
    },
    amenities: {
      furnished: false,
      wifi: false,
      kitchen: false,
      washingmachine: false,
      heating: false,
      parking: false,
      airconditioning: false,
      livingroom: false,
      tv: false,
      teakettle: false,
      toaster: false,
      microwave: false,
      oven: false,
      coffeemaker: false,
      cleaningproducts: false,
    },
    standoutAmenities: {
      patio: false,
      balcony: false,
      pool: false,
      piano: false,
      gym: false,
      cleaningservice: false,
      boardgames: false,
      books: false,
    },
    safetyAmenities: {
      smokealarm: false,
      firstaidkit: false,
      fireextinguisher: false,
      cameras: false,
    },
    photos: [],
    title: '',
    description: '',
    price: 0,
    deposit: 0,
    bills: null,
    duration: 'flex',
    moveInDate: '',
    moveOutDate: '',
    preferences: [],
    references: [],
  })

  const updateFormData = (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => {
    setData({ ...formData, [key]: value })
  }

  return (
    <FormContext.Provider
      value={{
        title,
        formData: formData as FormData,
        updateFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext
