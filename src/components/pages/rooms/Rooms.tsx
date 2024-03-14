import Button from '../../common/Buttons/Button'
import { Funnel } from '@phosphor-icons/react'
import ListingCard from '../../common/Card/ListingCard'
import Pagination from '../../common/Pagination/Pagination'

const data = [
  {
    id: '1',
    title: 'Spacious Studio Apartment',
    description: 'A spacious studio apartment with a beautiful view.',
    price: 1200,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '2',
    title: 'Luxury Penthouse Suite',
    description: 'Experience luxury living in this stunning penthouse suite.',
    price: 3000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/5fe6d7444256b10ff3d8992cc12c30771037dbf85254794074297ed0934d_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '3',
    title: 'Charming Cottage',
    description: 'Escape to this charming cottage in the countryside.',
    price: 800,
    image:
      'https://randomwordgenerator.com/img/picture-generator/55e3d3414855a514f1dc8460962e33791c3ad6e04e5074417c2f7dd6974dc7_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '4',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/55e9d0434e5bb10ff3d8992cc12c30771037dbf85257714b752c7bd49e45_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '5',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/50e2dc464e4faa0df7c5d57bc32f3e7b1d3ac3e45658724e77267bd493_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '6',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/50e2dc464e4faa0df7c5d57bc32f3e7b1d3ac3e45658724e77267bd493_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '7',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/50e2dc464e4faa0df7c5d57bc32f3e7b1d3ac3e45658724e77267bd493_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '8',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/50e2dc464e4faa0df7c5d57bc32f3e7b1d3ac3e45658724e77267bd493_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '9',
    title: 'Cozy Cabin',
    description: 'Experience the coziness of this charming cabin.',
    price: 1500,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Cabin',
    available: 'Flexible',
  },
  {
    id: '10',
    title: 'Beachfront Villa',
    description: 'Enjoy the breathtaking views from this beachfront villa.',
    price: 5000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Villa',
    available: 'Flexible',
  },
  {
    id: '11',
    title: 'Rustic Farmhouse',
    description: 'Escape to the countryside in this rustic farmhouse.',
    price: 1000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Farmhouse',
    available: 'Flexible',
  },
  {
    id: '12',
    title: 'City Loft',
    description: 'Experience urban living in this stylish city loft.',
    price: 1800,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '13',
    title: 'Mountain Retreat',
    description: 'Relax and unwind in this peaceful mountain retreat.',
    price: 2500,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Cabin',
    available: 'Flexible',
  },
  {
    id: '14',
    title: 'Lakefront Cottage',
    description: 'Enjoy the serenity of this beautiful lakefront cottage.',
    price: 1200,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Cottage',
    available: 'Flexible',
  },
  {
    id: '15',
    title: 'Luxury Condo',
    description: 'Indulge in luxury living in this stunning condo.',
    price: 3500,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '16',
    title: 'Seaside Bungalow',
    description: 'Experience the charm of this seaside bungalow.',
    price: 900,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Bungalow',
    available: 'Flexible',
  },
]

export default function Rooms() {
  const handleFilter = () => {
    console.log('filter button clicked...')
  }

  const renderData = (items: typeof data) => (
    <div className="grid grid-cols-4 grid-rows-1 gap-8">
      {items.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  )

  return (
    <div>
      <div className="container">
        {/* Filter Top section with filters on right */}
        <div className="flex justify-between items-center my-4">
          <h4>
            <b>145</b> rooms in Limerick
          </h4>
          <Button
            onClick={handleFilter}
            icon={<Funnel size={16} color="#000" />}
            iconPosition="left"
            border={true}
          >
            Filters
          </Button>
        </div>

        {/* Pagination */}
        <div>
          <h1>Pagination</h1>
          <Pagination itemsPerPage={8} data={data} renderData={renderData} />
        </div>
      </div>
    </div>
  )
}
