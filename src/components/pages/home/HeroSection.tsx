import Button from '../../common/Buttons/Button'
import style from './home.module.scss'
import { useNavigate } from 'react-router-dom'

interface HeroSectionProps {
  title: string
  subtitle: string
  image: string
  popularCities: { name: string; roomsLink: string; roomatesLink: string }[]
}

export default function HeroSection({
  title,
  subtitle,
  image,
}: HeroSectionProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/rooms')
  }

  return (
    <div
      className={style.hero__section}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container flex flex-col justify-center items-center">
        <h1 className={style.hero__heading}>{title}</h1>
        <p className={style.hero__body}>{subtitle}</p>
        <Button color="primary" onClick={handleClick}>
          Search Now
        </Button>
      </div>
    </div>
  )
}
