export interface PropertyProps {
  id?: string
  name: string
  address: {
    state: string
    city: string
    country: string
  }
  rating: number
  category: string[]
  price: number
  offers: {
    bed: string
    shower: string
    occupants: string
  }
  description?: string
  image: string
  discount?: string // Optional, as not all properties may have a discount
}