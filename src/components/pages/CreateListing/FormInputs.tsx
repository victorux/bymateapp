import useFormContext from '../../../hooks/useFormContext'
import ConfirmAddress from './4/ConfirmAddress'
import Step1About from './steps/0/Step1About'
import PropertyType from './steps/1/PropertyType'
import SpaceType from './steps/2/SpaceType'
import EnterAddress from './steps/3/EnterAddress'
import Baths from './steps/4/Baths'
import Step2Banner from './steps/5/Step2Banner'

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
    4: <ConfirmAddress />,
    5: <Baths />,
    6: <Step2Banner />, // Step 2 of the form
  }

  return <div>{displayStep[page]}</div>
}

export default FormInputs
