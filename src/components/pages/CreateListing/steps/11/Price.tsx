import { Empty, Invoice, PuzzlePiece } from '@phosphor-icons/react'
import useFormContext from '../../../../../hooks/useFormContext'
import CustomRadioButton from '../../../../common/Form/CustomRadioButton'
import styles from '../../Form.module.scss'
import { useState } from 'react'

const Price = () => {
  const { updateFormData, formData } = useFormContext()
  const [isDeposit, setIsDeposit] = useState(false)

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 5) {
      updateFormData('price', parseInt(e.target.value))
    }
  }

  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 5) {
      updateFormData('deposit', parseInt(e.target.value))
    }
  }

  const handleClickBill = (newValue: 'included' | 'partial' | null) => {
    updateFormData('bills', newValue)
  }

  return (
    <div className={`${styles.center}`}>
      <div className="flex flex-col items-center gap-10 max-w-[455px]">
        <div className="flex flex-col gap-2">
          <h4>Now, set your price, deposit, bills</h4>
          <p className="text-base text-neutral-500">
            You can change it anytime.
          </p>
        </div>
        {/* Price Per Month */}
        <div className="flex flex-col relative w-full">
          <label htmlFor="price" className="text-xl font-medium mb-2">
            Price per month
          </label>
          <input
            className="py-6 pl-14 pr-48 border border-neutral-200 rounded-lg text-5xl font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            name="price"
            id="price"
            type="number"
            value={formData?.price}
            onChange={handlePriceChange}
          />
          <span className="font-bold text-5xl absolute top-[47%] left-6">
            &#8364;
          </span>
          <div className="border-l border-px border-neutral-200 absolute right-0 top-[54%] flex items-center px-8">
            <span>Monthly</span>
          </div>
        </div>
        {/* Deposit */}
        <div className="flex flex-col relative w-full">
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="deposit" className="text-xl font-medium mb-2">
              Deposit
            </label>
            <div
              onClick={() => setIsDeposit(!isDeposit)}
              className="cursor-pointer w-[60px] p-1 border border-neutral-400 rounded-full"
            >
              <div
                className={`transition-all w-[21px] h-[21px] rounded-full   ${
                  isDeposit
                    ? 'bg-secondary-400 ml-auto'
                    : 'bg-neutral-500 mr-auto'
                }`}
              />
            </div>
          </div>
          {isDeposit && (
            <>
              <input
                className="mt-2 py-6 pl-10 pr-48 border border-neutral-200 rounded-lg text-xl font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="deposit"
                id="deposit"
                type="number"
                value={formData?.deposit}
                onChange={handleDepositChange}
              />
              <span className="font-bold text-xl absolute top-[56%] left-6">
                &#8364;
              </span>
            </>
          )}
        </div>
        {/* End Deposit */}
        <h6 className="text-xl font-medium">
          Are bills included in rental price?
        </h6>
        <div className="flex gap-4 items-center">
          <CustomRadioButton
            title="Included"
            icon={<Invoice size={32} />}
            selected={formData?.bills === 'included'}
            onClick={() => handleClickBill('included')}
          />
          <CustomRadioButton
            title="Partial"
            icon={<PuzzlePiece size={32} />}
            selected={formData?.bills === 'partial'}
            onClick={() => handleClickBill('partial')}
          />
          <CustomRadioButton
            title="Not included"
            icon={<Empty size={32} />}
            selected={formData?.bills === null}
            onClick={() => handleClickBill(null)}
          />
        </div>
      </div>
    </div>
  )
}

export default Price
