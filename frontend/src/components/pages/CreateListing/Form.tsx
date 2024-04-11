import { FormProvider } from '../../../context/FormContext'
import FormFooter from './FormFooter'
import FormInputs from './FormInputs'

const AddForm = () => {
  return (
    <>
      <FormProvider>
        <FormInputs />
        <FormFooter />
      </FormProvider>
    </>
  )
}

export default AddForm
