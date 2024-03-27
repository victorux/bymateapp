const PropertyType = () => {
  return (
    <div className="container mt-16">
      <h1>Which of these best describes your place?</h1>
      <label htmlFor="house" className="flex gap-4">
        <input type="radio" id="house" name="house-type" value="" />
        <span>House</span>
      </label>
    </div>
  )
}

export default PropertyType
