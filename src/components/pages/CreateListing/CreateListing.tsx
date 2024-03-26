import { FormProvider } from '../../../context/FormContext'
import Form from './Form'
import FormFooter from './FormFooter'

const CreateListing = () => {
  return (
    <div>
      <FormProvider>
        <Form />
        <FormFooter />
      </FormProvider>
    </div>
  )
}

export default CreateListing
