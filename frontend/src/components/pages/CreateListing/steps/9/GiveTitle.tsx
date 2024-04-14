import CustomTextArea from '../../../../common/Form/CustomTextArea'
import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'
import FormFooter from '../../FormFooter'

const GiveTitle = () => {
  const { updateFormData, formData } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (formData) {
      updateFormData('title', e.target.value)
    }
  }
  const allowNextPage = () => {
    if ((formData?.title?.length ?? 0) > 4) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div className={styles.center}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Now, let's give your ad a title</h3>
            <p className="text-lg font-normal text-neutral-500 mb-2">
              Short titles work best. Have fun with it - you can always change
              it later.
            </p>
            <CustomTextArea
              name="title"
              placeholder="Title your ad here..."
              onChange={handleChange}
              value={formData?.title ?? ''}
              maxLength={32}
              cols={50}
              rows={4}
            />
          </div>
        </div>
      </div>
      <FormFooter canNextPage={allowNextPage()} />
    </>
  )
}

export default GiveTitle
