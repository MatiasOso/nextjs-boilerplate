'use client'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { getTotalQuantity, toggleCart } from '@/store/features/cartSlice'

import { useSelector, useDispatch } from 'react-redux'
const CartButton = ({ quantity=0 }) => {
    const totalQuantity = useSelector(getTotalQuantity);
    const dispatch = useDispatch();

    return (
        <div>
            
            <button type="button" onClick={() => dispatch(toggleCart())}> {/*className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 */}
            <img className="mx-4" src="./assets/images/Carrito.png" alt="Placeholder" />
            {/* <ShoppingCartIcon className="w-10" aria-hidden="true" /> */}
                {/* <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-marino border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{totalQuantity}</div>  */}
                </button>
{/* AJUSTAR EL DIV QUE MUESTRA LA QUANTITY */}
        </div>
    )
}

export default CartButton