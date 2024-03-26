import useFormContext from '../../../hooks/useFormContext'
import AboutProperty from './steps/0/AboutProperty'

const FormInputs = () => {
  const { page } = useFormContext()

  interface DisplayStep {
    [key: number]: JSX.Element
  }

  const displayStep: DisplayStep = {
    0: <AboutProperty />,
  }

  return <div>{displayStep[page]}</div>
}

export default FormInputs
