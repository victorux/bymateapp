import { CaretRight, Heart, ShareFat } from '@phosphor-icons/react'
import { COLORS } from '../../../constants/colors'
import Button from '../../common/Buttons/Button'
import Thumbail1 from '../../../assets/property/image01.png'

export default function RoomDetails() {
  return (
    <div className="container">
      <div className="flex justify-between bg-neutral-50 ">
        <div className="flex flex-row gap-1 text-xl items-center">
          <span>Galway</span>
          <CaretRight size={24} color={COLORS.black} />
          <span>Rahoon</span>
        </div>
        <div className="flex items-center gap-4 my-6">
          <Button
            onClick={() => console.log('Share Button clicked...')}
            icon={<ShareFat size={24} color={COLORS.black} />}
            iconPosition="left"
            border={true}
            rounded="rounded-full"
            size="small"
          >
            Share
          </Button>
          <Button
            onClick={() => console.log('Save Button clicked...')}
            icon={<Heart size={24} color={COLORS.black} />}
            iconPosition="left"
            border={true}
            rounded="rounded-full"
            size="small"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 grid-rows-2 gap-6 h-[640px]">
        <div
          className="rounded-md col-span-2 row-span-2 bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
      </div>

      <div className="grid grid-cols-6 gap-10 w-full">
        <div className="col-span-4"></div>
        <div className="bg-secondary-75 self-start col-span-2">
          <span>Right sidebar:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni
            ipsa alias aut enim quis sit, tempora et porro atque aliquam, nihil
            nisi, beatae eveniet commodi explicabo eaque tempore. Et!
          </p>
        </div>
      </div>
    </div>
  )
}
