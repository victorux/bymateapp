import { CaretRight, Heart, ShareFat } from '@phosphor-icons/react'
import { COLORS } from '../../../constants/colors'
import Button from '../../common/Buttons/Button'

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

      <div className="bg-neutral-100 h-[600px] w-full">
        Property/Room Images
      </div>

      <div className="grid grid-cols-6 gap-10 w-full">
        <div className="bg-primary-75 col-span-4">
          <span>Property Info main content:</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            nihil sit veniam, provident nesciunt minima ad earum error harum
            debitis culpa in non similique. Dolorum officiis iure architecto
            laboriosam ipsa! Facilis voluptas ut id eaque beatae accusantium
            ducimus cupiditate, ullam aspernatur dolores dignissimos, aut sed
            similique optio quas, sunt consequuntur non? Voluptate nobis atque
            cum provident dicta esse eveniet. Consectetur. Maiores voluptatum
            officiis corrupti et praesentium. Nesciunt esse magni earum ad
            aliquid ipsa quae ipsum harum doloribus deserunt quasi perspiciatis
            dicta ab commodi totam, voluptatum in illo, delectus nisi. Placeat?
            Neque tenetur voluptas magni, voluptate omnis dolorem sint eius
            reiciendis culpa nostrum vitae. Aperiam ut distinctio tempore
            nostrum error perferendis sapiente, culpa quaerat neque aspernatur,
            natus ratione harum ex quam. A quidem rem magni reprehenderit rerum?
            Perspiciatis eligendi dicta explicabo fugit asperiores laudantium
            incidunt placeat culpa earum sint aspernatur facere, hic deleniti
            obcaecati molestiae soluta minus! Voluptas nihil deleniti quis.
            Consectetur officia blanditiis distinctio at? Vero sapiente
            accusamus qui excepturi aliquid sequi nobis perferendis eum nisi non
            illo dignissimos minima recusandae repellendus vel
          </p>
        </div>
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
