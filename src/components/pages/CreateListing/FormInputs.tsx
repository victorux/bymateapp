import useFormContext from '../../../hooks/useFormContext'
import Step1About from './steps/0/Step1About'
import PropertyType from './steps/1/PropertyType'
import SpaceType from './steps/2/SpaceType'
import EnterAddress from './steps/3/EnterAddress'
import Baths from './steps/4/Baths'
import Step2Banner from './steps/5/Step2Banner'
import Amenities from './steps/6/Amenities'

const FormInputs = () => {
  const { page } = useFormContext()

  interface DisplayStep {
    [key: number]: JSX.Element
  }

  const displayStep: DisplayStep = {
    0: <Step1About />, // Step 1 of the form
    1: <PropertyType />,
    2: <SpaceType />,
    3: <EnterAddress />,
    4: <Baths />,
    5: <Step2Banner />,
    6: <Amenities />,
  }

  return <div>{displayStep[page]}</div>
}

export default FormInputs
