import { UserIcon } from '@heroicons/react/24/outline'


const CartButton = ({ quantity=0 }) => {
    return (
        <div>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <UserIcon className="w-10" aria-hidden="true" />
                <span className="sr-only">Login</span>
            </button>

        </div>
    )
}

export default CartButton