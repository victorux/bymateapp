import { useState } from 'react'
import Input from '../../../../common/Form/Input'
import styles from '../../Form.module.scss'

const EnterAddress = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.center}>
      <div className="container flex flex-col mt-16 items-center">
        <h5 className="mb-8">Where's your place located?</h5>
        <Input label="Enter Address" onChange={handleChange} value={value} />
      </div>
    </div>
  )
}

export default EnterAddress
