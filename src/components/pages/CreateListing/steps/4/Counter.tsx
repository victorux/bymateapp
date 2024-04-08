import RoundedButton from '../../../../common/Form/RoundedButton'
import { Minus, Plus } from '@phosphor-icons/react'

interface CounterProps {
  counter: number | undefined
  onIncrement: () => void
  onDecrement: () => void
}

const Counter = ({ counter, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <RoundedButton icon={<Minus onClick={onDecrement} size={16} />} />
      {counter}
      <RoundedButton icon={<Plus onClick={onIncrement} size={16} />} />
    </div>
  )
}

export default Counter
