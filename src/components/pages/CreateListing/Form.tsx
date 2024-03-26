import useFormContext from '../../../hooks/useFormContext'

const Form = () => {
  const { title, page, data } = useFormContext()

  console.log(title[page])
  console.log(data)

  return (
    <div>
      <h1>{title[page]}</h1>
    </div>
  )
}

export default Form
