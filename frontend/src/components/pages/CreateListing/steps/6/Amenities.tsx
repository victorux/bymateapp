import CustomCheckButton from '../../../../common/Form/CustomCheckButton'
import {
  WifiHigh,
  Oven,
  Chair,
  WashingMachine,
  ThermometerHot,
  Fan,
  Television,
  TeaBag,
  BowlFood,
  Coffee,
  SprayBottle,
  Car,
  Bread,
  PottedPlant,
  DoorOpen,
  SwimmingPool,
  PianoKeys,
  Barbell,
  DiceTwo,
  Books,
  Siren,
  FirstAid,
  FireExtinguisher,
  SecurityCamera,
} from '@phosphor-icons/react'
import useFormContext from '../../../../../hooks/useFormContext'
import { FormData } from '../../../../../types/NewListings'
import { Couch } from '@phosphor-icons/react/dist/ssr'

const amenitiesData: { [key in keyof FormData['amenities']]: boolean } = {
  wifi: false,
  furnished: false,
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
}

const standoutData: { [key in keyof FormData['standoutAmenities']]: boolean } =
  {
    patio: false,
    balcony: false,
    pool: false,
    piano: false,
    gym: false,
    cleaningservice: false,
    boardgames: false,
    books: false,
  }

const safetyData: { [key in keyof FormData['safetyAmenities']]: boolean } = {
  smokealarm: false,
  firstaidkit: false,
  fireextinguisher: false,
  cameras: false,
}

const iconsAmenities = {
  wifi: {
    label: 'Wi-fi',
    icon: <WifiHigh size={32} />,
  },
  furnished: {
    label: 'Furnished',
    icon: <Chair size={32} />,
  },
  kitchen: {
    label: 'Kitchen',
    icon: <Oven size={32} />,
  },
  washingmachine: {
    label: 'Washing machine',
    icon: <WashingMachine size={32} />,
  },
  heating: {
    label: 'Heating',
    icon: <ThermometerHot size={32} />,
  },
  parking: {
    label: 'Parking',
    icon: <Car size={32} />,
  },
  airconditioning: {
    label: 'Air conditioning',
    icon: <Fan size={32} />,
  },
  livingroom: {
    label: 'Living room',
    icon: <Couch size={32} />,
  },
  tv: {
    label: 'TV',
    icon: <Television size={32} />,
  },
  teakettle: {
    label: 'Tea kettle',
    icon: <TeaBag size={32} />,
  },
  microwave: {
    label: 'Microwave',
    icon: <BowlFood size={32} />,
  },
  toaster: {
    label: 'Toaster',
    icon: <Bread size={32} />,
  },
  oven: {
    label: 'Oven',
    icon: <Oven size={32} />,
  },
  coffeemaker: {
    label: 'Coffee maker',
    icon: <Coffee size={32} />,
  },
  cleaningproducts: {
    label: 'Cleaning products',
    icon: <SprayBottle size={32} />,
  },
}

const iconsStandout = {
  patio: {
    label: 'Garden',
    icon: <PottedPlant size={32} />,
  },
  balcony: {
    label: 'Balcony',
    icon: <DoorOpen size={32} />,
  },
  pool: {
    label: 'Pool',
    icon: <SwimmingPool size={32} />,
  },
  piano: {
    label: 'Piano',
    icon: <PianoKeys size={32} />,
  },
  gym: {
    label: 'Gym',
    icon: <Barbell size={32} />,
  },
  cleaningservice: {
    label: 'Cleaning service',
    icon: <Chair size={32} />,
  },
  boardgames: {
    label: 'Board games',
    icon: <DiceTwo size={32} />,
  },
  books: {
    label: 'Books',
    icon: <Books size={32} />,
  },
}

const iconsSafety = {
  smokealarm: {
    label: 'Smoke alarm',
    icon: <Siren size={32} />,
  },
  firstaidkit: {
    label: 'First aid kit',
    icon: <FirstAid size={32} />,
  },
  fireextinguisher: {
    label: 'Fire extinguisher',
    icon: <FireExtinguisher size={32} />,
  },
  cameras: {
    label: 'Cameras',
    icon: <SecurityCamera size={32} />,
  },
}

const Amenities = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClickAmmenities = (key: keyof FormData['amenities']) => {
    updateFormData('amenities', {
      ...formData?.amenities,
      [key]: !formData?.amenities[key],
    } as FormData['amenities'])
    console.log(formData?.amenities[key])
  }

  const handleClickStandout = (key: keyof FormData['standoutAmenities']) => {
    updateFormData('standoutAmenities', {
      ...formData?.standoutAmenities,
      [key]: !formData?.standoutAmenities[key],
    } as FormData['standoutAmenities'])
    console.log(formData?.standoutAmenities[key])
  }

  const handleClickSafety = (key: keyof FormData['safetyAmenities']) => {
    updateFormData('safetyAmenities', {
      ...formData?.safetyAmenities,
      [key]: !formData?.safetyAmenities[key],
    } as FormData['safetyAmenities'])
    console.log(formData?.safetyAmenities[key])
  }

  return (
    <div className="flex flex-col w-full items-center my-10">
      <div className="flex flex-col gap-10">
        <div>
          <Heading>Tell renters what your place has to offer</Heading>
          <div className="grid grid-cols-3 max-w-[700px] gap-4">
            {Object.entries(amenitiesData).map(([key]) => (
              <CustomCheckButton
                key={key}
                icon={iconsAmenities[key as keyof typeof iconsAmenities].icon}
                selected={
                  formData?.amenities[key as keyof FormData['amenities']] ??
                  false
                }
                label={iconsAmenities[key as keyof typeof iconsAmenities].label}
                onClick={() =>
                  handleClickAmmenities(key as keyof FormData['amenities'])
                }
              />
            ))}
          </div>
        </div>
        <div>
          <Heading>Do you have any standout amenities?</Heading>
          <div className="grid grid-cols-3 max-w-[700px] gap-4">
            {Object.entries(standoutData).map(([key]) => (
              <CustomCheckButton
                key={key}
                icon={iconsStandout[key as keyof typeof iconsStandout].icon}
                selected={
                  formData?.standoutAmenities[
                    key as keyof FormData['standoutAmenities']
                  ] ?? false
                }
                label={iconsStandout[key as keyof typeof iconsStandout].label}
                onClick={() =>
                  handleClickStandout(
                    key as keyof FormData['standoutAmenities']
                  )
                }
              />
            ))}
          </div>
        </div>
        <div>
          <Heading>Do you have any of these safety items?</Heading>
          <div className="grid grid-cols-3 max-w-[700px] gap-4">
            {Object.entries(safetyData).map(([key]) => (
              <CustomCheckButton
                key={key}
                icon={iconsSafety[key as keyof typeof iconsSafety].icon}
                selected={
                  formData?.safetyAmenities[
                    key as keyof FormData['safetyAmenities']
                  ] ?? false
                }
                label={iconsSafety[key as keyof typeof iconsSafety].label}
                onClick={() =>
                  handleClickSafety(key as keyof FormData['safetyAmenities'])
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="font-medium mb-4">{children}</h5>
}
