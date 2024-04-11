import StepBanner from '../../StepBanner'
import banner1 from '../../../../../assets/img/form-step-1.jpg'

const Step2Banner = () => {
  return (
    <div className="container">
      <StepBanner
        step={2}
        title="Amenities"
        description="In this step, you’ll add some of the amenities your place offers, plus 5 or more photos."
        img={banner1}
      />
    </div>
  )
}

export default Step2Banner
