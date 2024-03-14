import React, { useState } from 'react'

interface PaginationProps<T> {
  itemsPerPage: number
  data: T[]
  renderData: (items: T[]) => React.ReactNode
}

const Pagination = <T,>({
  itemsPerPage,
  data,
  renderData,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Calculate index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Slice the data array to get the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      {/* Render data for the current page */}
      {renderData(currentItems)}

      {/* Pagination buttons */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination
