import Button from '../../common/Buttons/Button'
import { Funnel } from '@phosphor-icons/react'

export default function Rooms() {
  const handleFilter = () => {
    console.log('filter button clicked...')
  }
  return (
    <div>
      <div className="container">
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
        <div>Listing cards goes here...</div>
        <div>Pagination</div>
      </div>
    </div>
  )
}
