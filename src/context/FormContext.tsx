import React, { createContext, useState } from 'react'

import { NewListings } from '../types/NewListings'

const FormContext = createContext({} as NewListings)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0)

  const title: { [key: number]: string } = {
    // Step 1
    0: 'Step 1: About the Property',
    1: 'Which of these best describes your place?',
    2: 'What type of place will guests have?',
    3: 'Where is your place located?',
    4: 'Confirm the address',
    5: 'What kind of bathrooms available to renter',
    // Step 2: 'What amenities do you offer?',
    6: 'Step 2: Amenities',
    7: 'Amenities, Standout Amenities, Safety items',
    8: 'Photos',
    // Step 3: 'Title & Description, price',
    9: 'Step 3: Title & Description, price',
    10: 'Title',
    11: 'Description',
    12: 'Price, Deposit, Bills',
    13: 'Duration, Move-in Date, Move-out Date',
    // Last Step
    14: 'Step 4: finish up',
    15: 'Preferences: Smoking, Pets, References',
    16: 'Preview and Publish',
  }

  const data: NewListings['data'] = {
    propertyType: null,
    spaceType: null,
    county: '',
    street: '',
    city: '',
    eircode: '',
    bathsavailable: {
      private: 0,
      shared: 0,
      dedicated: 0,
    },
    amenities: null,
    standoutAmenities: null,
    safetyAmenities: null,
    photos: [],
    title: '',
    description: '',
    price: 0,
    deposit: null,
    bills: null,
    duration: null,
    moveInDate: '',
    moveOutDate: '',
    preferences: [],
    references: [],
  }

  return (
    <FormContext.Provider value={{ title, page, setPage, data }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext
