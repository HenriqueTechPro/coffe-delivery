import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { OrderInfo } from '../components/Form'
import { useNavigate } from 'react-router-dom'

interface Coffees {
  id: string
  image: string
  title: string
  description: string
  type: string[]
  price: number
}

interface FetchCoffeesProps {
  query?: string
}

interface CheckoutContextType {
  coffees: Coffees[]
  cart: Item[]
  orders: Order[]

  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
  fetchCoffees: ({ query }: FetchCoffeesProps) => Promise<void>
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffees[]>([])

  // const fetchCoffees = useCallback(async ({ query = '' }) => {
  //   const response = await api.get('/coffees', {})

  //   setCoffees(response.data)
  // }, [])

  const fetchCoffees = useCallback(
    async ({ query = '' }: FetchCoffeesProps) => {
      const response = await api.get('/coffees', {
        params: {
          q: query,
        },
      })

      setCoffees(response.data)
    },
    [],
  )

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    fetchCoffees({})
  }, [fetchCoffees])

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        addItem,
        cart,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
        orders,
        fetchCoffees,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
