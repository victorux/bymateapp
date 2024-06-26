import Step1About from './steps/0/Step1About'
import PropertyType from './steps/1/PropertyType'
import GiveDescription from './steps/10/GiveDescription'
import Price from './steps/11/Price'
import Duration from './steps/12/Duration'
import PreviewAndPublish from './steps/13/PreviewAndPublish'
import SpaceType from './steps/2/SpaceType'
import EnterAddress from './steps/3/EnterAddress'
import Baths from './steps/4/Baths'
import Step2Banner from './steps/5/Step2Banner'
import Amenities from './steps/6/Amenities'
import UploadPhotos from './steps/7/UploadPhotos'
import Step3Finish from './steps/8/Step3Finish'
import GiveTitle from './steps/9/GiveTitle'
import { useLocation } from 'react-router-dom'

const FormInputs = () => {
  // Get the current step from the URL
  const location = useLocation()
  const stepFromURL = Number(location.pathname.split('/').pop())

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
    7: <UploadPhotos />,
    8: <Step3Finish />,
    9: <GiveTitle />,
    10: <GiveDescription />,
    11: <Price />,
    12: <Duration />,
    13: <PreviewAndPublish />,
  }

  return <div>{displayStep[stepFromURL]}</div>
}

export default FormInputs
