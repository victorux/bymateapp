import { FormProvider } from '../../../context/FormContext'
import FormInputs from './FormInputs'

const AddForm = () => {
  return (
    <>
      <FormProvider>
        <FormInputs />
      </FormProvider>
    </>
  )
}

export default AddForm
