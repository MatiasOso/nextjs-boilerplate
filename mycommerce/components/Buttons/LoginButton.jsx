import Link from 'next/link';

const CartButton = ({ quantity = 0 }) => {
  return (
    <div>
      <Link href="/loginUsers">
        <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white">
          {/* <UserIcon className="w-10" aria-hidden="true" /> */}
          <img className="mx-4" src="./assets/images/Person.png" alt="Placeholder" />
          <span className="sr-only">Login</span>
        </div>
      </Link>
    </div>
  );
};

export default CartButton;
