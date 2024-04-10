import Button from '../../../../common/Buttons/Button'
import ListingCard from '../../../../common/Card/ListingCard'
import styles from '../../Form.module.scss'

const listingData = {
  id: '1',
  title: 'Spacious Studio Apartment',
  description: 'A spacious studio apartment with a beautiful view.',
  price: 1200,
  image:
    'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
  listingType: 'Entire Place',
  propertyType: 'Apartment',
  available: 'Flexible',
}

const PreviewAndPublish = () => {
  return (
    <div className={styles.center}>
      <div className="flex flex-row gap-20">
        <div>
          <h3 className="font-semibold mb-4">Preview and publish</h3>
          <p className="max-w-[400px] text-neutral-500 mb-6">
            Here's what we'll show to renters. Before you publish, make sure to
            review the details.
          </p>
          <Button
            border
            size="medium"
            onClick={() => console.log('preview was  clicked')}
          >
            Preview
          </Button>
        </div>
        <div>
          <ListingCard listing={listingData} />
        </div>
      </div>
    </div>
  )
}

export default PreviewAndPublish
