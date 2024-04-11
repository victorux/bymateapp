import styles from './Form.module.scss'

interface StepBannerProps {
  step: number
  title: string
  description: string
  img: string
}

const StepBanner = ({ step, title, img, description }: StepBannerProps) => {
  return (
    <div className={styles.center}>
      <div className="w-full grid grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-lg text-neutral-500 mb-6">Step: {step}</span>
          <h1 className="font-semibold font-display">{title}</h1>
          <p className="mt-2 text-base leading-7 max-w-4xl">{description}</p>
        </div>
        <div className="relative justify-self-end">
          <div className={styles.blur}></div>
          <img className="object-cover" src={img} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default StepBanner
