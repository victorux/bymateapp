import StepBanner from '../../StepBanner'
import banner1 from '../../../../../assets/img/form-step-1.jpg'

const Step3Finish = () => {
  return (
    <div className="container">
      <StepBanner
        img={banner1}
        step={3}
        title="Finish up and publish"
        description="Finally,  create the title and description for your add. Then you will  set up pricing, deposit, contract duration and publish your listing."
      />
    </div>
  )
}

export default Step3Finish
