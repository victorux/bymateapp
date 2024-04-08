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
} from '@phosphor-icons/react'
import useFormContext from '../../../../../hooks/useFormContext'
import { FormData } from '../../../../../types/NewListings'
import { Couch } from '@phosphor-icons/react/dist/ssr'
import styles from '../../Form.module.scss'

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

const icons = {
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

const Amenities = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClick = (key: keyof FormData['amenities']) => {
    updateFormData('amenities', {
      ...formData?.amenities,
      [key]: !formData?.amenities[key],
    } as FormData['amenities'])
    console.log(formData?.amenities[key])
  }

  return (
    <div className={styles.center}>
      <div>
        <Heading>Tell renters what your place has to offer</Heading>
        <div className="grid grid-cols-3 max-w-[700px] gap-4">
          {Object.entries(amenitiesData).map(([key]) => (
            <CustomCheckButton
              key={key}
              icon={icons[key as keyof typeof icons].icon}
              selected={
                formData?.amenities[key as keyof FormData['amenities']] ?? false
              }
              label={icons[key as keyof typeof icons].label}
              onClick={() => handleClick(key as keyof FormData['amenities'])}
            />
          ))}
        </div>
        <Heading>Do you have any standout amenities?</Heading>
        <Heading>Do you have any of these safety items?</Heading>
      </div>
    </div>
  )
}

export default Amenities

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="font-medium">{children}</h5>
}
