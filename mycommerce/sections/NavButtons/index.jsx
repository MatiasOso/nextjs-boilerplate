import CartButton from "@/components/Buttons/CartButton"
import LoginButton from "@/components/Buttons/LoginButton"
const Buttons = ({ setShowCart, quantity }) => {
  return (
    <div className='centered-middle flex-row justify-center'>
      <CartButton setShowCart={setShowCart} quantity={quantity} />   
      <LoginButton />
    </div>
  )
}

export default Buttons