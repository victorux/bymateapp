interface CustomTextAreaProps {
  name: string
  placeholder: string
  rows?: number
  cols?: number
  value: string
  maxLength?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea = ({
  value,
  onChange,
  maxLength,
  cols,
  rows,
}: CustomTextAreaProps) => {
  return (
    <div>
      <textarea
        className="border border-neutral-200 rounded-xl text-xl p-4 font-normal"
        cols={cols}
        rows={rows}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      />
      <p>
        <span>{value.length} </span>
        <span>/ {maxLength}</span>
      </p>
    </div>
  )
}

export default CustomTextArea
