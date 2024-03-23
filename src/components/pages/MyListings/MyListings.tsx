import Button from '../../common/Buttons/Button'
import { Plus } from '@phosphor-icons/react'

function MyListings() {
  const activeButtonHandler = () => {
    console.log('active btn clicked')
  }
  const draftButtonHandler = () => {
    console.log('draft btn clicked')
  }
  const deactivatedButtonHandler = () => {
    console.log('deactivated btn clicked')
  }

  return (
    <div className="container">
      <h3 className="font-semibold font-display mt-14">Active Listings</h3>
      <div className="flex flex-row items-center justify-between">
        {/* Tabs Left */}
        <div className="flex flex-row gap-4 mt-6">
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={activeButtonHandler}
          >
            Active (24)
          </Button>
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={draftButtonHandler}
          >
            Draft (0)
          </Button>
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={deactivatedButtonHandler}
          >
            Deactivated (0)
          </Button>
        </div>
        {/* Btn create new listing right */}
        <Button
          color="primary"
          rounded="rounded-md"
          size="small"
          onClick={() => console.log('create new listing')}
          icon={<Plus size={16} color="#ffffff" />}
        >
          Create New Listing
        </Button>
      </div>
      {/* User's Listings */}
      <div className="flex flex-col mt-6 w-full">
        Here goes the user's listings...
      </div>
    </div>
  )
}

export default MyListings
