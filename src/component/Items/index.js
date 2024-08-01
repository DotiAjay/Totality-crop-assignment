import './index.css'

const Item = props => {
  const {val, BookRoom} = props
  const {imageUrl, description, title, price, bedrooms, location} = val
  const addBooking = () => {
    const {id} = val
    BookRoom(id)
  }
  return (
    <li className="item">
      <img src={imageUrl} alt={title} className="roompic" />
      <h1>{title}</h1>
      <p className="text">{description}</p>
      <div className="desc-Container">
        <p className="text">price : {price}</p>
        <p className="text">no of Bedrooms : {bedrooms}</p>
        <p className="text"> location: {location}</p>
        <button className="book" onClick={addBooking}>
          Book Now
        </button>
      </div>
      <hr />
    </li>
  )
}

export default Item
