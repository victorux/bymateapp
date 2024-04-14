import StepBanner from '../../StepBanner'
import banner1 from '../../../../../assets/img/form-step-1.jpg'
import FormFooter from '../../FormFooter'

const Step1About = () => {
  return (
    <>
      <div className="container">
        <StepBanner
          step={1}
          title="About the Property"
          description="Tell us about your property. What makes it unique? What are the best features?"
          img={banner1}
        />
      </div>
      <FormFooter canNextPage />
    </>
  )
}

export default Step1About
