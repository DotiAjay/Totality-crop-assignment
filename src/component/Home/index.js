import {Component} from 'react'
import Header from '../Header'
import Item from '../Items'
import './index.css'

const properties = [
  {
    id: 1,
    title: 'Charming Beachfront Cottage',
    description: 'A cozy cottage with stunning ocean views.',
    price: 150,
    location: 'California, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Modern Apartment in City Center',
    description: 'Luxurious apartment with easy access to public transport.',
    price: 200,
    location: 'New York, USA',
    bedrooms: 1,
    amenities: ['WiFi', 'Gym', 'Parking'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Rustic Mountain Cabin',
    description: 'A secluded cabin perfect for nature lovers.',
    price: 120,
    location: 'Colorado, USA',
    bedrooms: 3,
    amenities: ['WiFi', 'Fireplace', 'Pets Allowed'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Luxurious Villa with Pool',
    description: 'Spacious villa with a private swimming pool.',
    price: 300,
    location: 'Miami, USA',
    bedrooms: 4,
    amenities: ['WiFi', 'Pool', 'BBQ Grill'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    title: 'Cozy Studio Apartment',
    description: 'A compact studio ideal for solo travelers.',
    price: 80,
    location: 'Toronto, Canada',
    bedrooms: 0,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    title: 'Charming Countryside Farmhouse',
    description: 'Experience rural life in this charming farmhouse.',
    price: 140,
    location: 'Tennessee, USA',
    bedrooms: 3,
    amenities: ['WiFi', 'Fireplace', 'BBQ Grill'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    title: 'Stylish Loft in Downtown',
    description: 'Modern loft with great city views.',
    price: 250,
    location: 'Chicago, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Gym', 'Parking'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    title: 'Beach House with Private Access',
    description: 'Relax in this beautiful beach house.',
    price: 180,
    location: 'Florida, USA',
    bedrooms: 3,
    amenities: ['WiFi', 'Ocean View', 'Kitchen'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    title: 'Historic Castle Stay',
    description: 'Stay in a historic castle for a unique experience.',
    price: 500,
    location: 'Scotland, UK',
    bedrooms: 5,
    amenities: ['WiFi', 'Free Parking', 'Fireplace'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 10,
    title: 'Elegant City Apartment',
    description: 'Stylish apartment in the heart of the city.',
    price: 220,
    location: 'Paris, France',
    bedrooms: 1,
    amenities: ['WiFi', 'Kitchen', 'Balcony'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 11,
    title: 'Sunny Beachfront Condo',
    description: 'Beautiful condo with beach access.',
    price: 170,
    location: 'Hawaii, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 12,
    title: 'Cozy Cabin in the Woods',
    description: 'A serene cabin getaway in the forest.',
    price: 110,
    location: 'Oregon, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Fireplace', 'Pets Allowed'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 13,
    title: 'Luxury Penthouse Suite',
    description: 'Experience luxury in this stunning penthouse.',
    price: 450,
    location: 'Dubai, UAE',
    bedrooms: 3,
    amenities: ['WiFi', 'Pool', 'Spa'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 14,
    title: 'Charming Bungalow',
    description: 'A lovely bungalow perfect for a family vacation.',
    price: 160,
    location: 'California, USA',
    bedrooms: 3,
    amenities: ['WiFi', 'Kitchen', 'BBQ Grill'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 15,
    title: 'Modern Studio Near Beach',
    description: 'Compact studio close to the beach.',
    price: 90,
    location: 'Malibu, USA',
    bedrooms: 0,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 16,
    title: 'Exquisite Waterfront Villa',
    description: 'Enjoy breathtaking views from this villa.',
    price: 600,
    location: 'Santorini, Greece',
    bedrooms: 4,
    amenities: ['WiFi', 'Pool', 'Ocean View'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 17,
    title: 'Chic Urban Apartment',
    description: 'Stylish apartment in a vibrant neighborhood.',
    price: 230,
    location: 'Berlin, Germany',
    bedrooms: 1,
    amenities: ['WiFi', 'Gym', 'Balcony'],
    iimageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 18,
    title: 'Charming Cabin with Mountain Views',
    description: 'Relax in this cabin with stunning mountain views.',
    price: 130,
    location: 'Wyoming, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Fireplace', 'BBQ Grill'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 19,
    title: 'Cozy Lake House',
    description: 'Peaceful lake house with fishing access.',
    price: 145,
    location: 'Michigan, USA',
    bedrooms: 2,
    amenities: ['WiFi', 'Fireplace', 'Kitchen'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 20,
    title: 'Luxurious Resort Suite',
    description: 'Stay in this upscale resort suite with amenities.',
    price: 400,
    location: 'Bali, Indonesia',
    bedrooms: 3,
    amenities: ['WiFi', 'Pool', 'Spa'],
    imageUrl:
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

class Home extends Component {
  state = {bookid: []}

  BookRoom = id => {
    this.setState(preState => ({
      bookid: [...preState.bookid, id],
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Book The Room you whish</h1>
          <p></p>
          <div>
            <ul type="none" className="roomContainer">
              {properties.map(each => (
                <Item val={each} key={each.id} BookRoom={this.BookRoom} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
