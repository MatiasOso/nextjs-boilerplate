import { data } from "autoprefixer"
import Image from "next/image"
const styles = {
   container : {
         logo: 'w-1/8 bg-green-200',
         
   }
}

const Logo = ({data}) => {
  return (
    <div>
        <div className=""> <Image src='/assets/logo.svg' width={100} height={100} /> </div>
        <div> 
            <div> EMPRESA </div>
            <div> SLOGAN </div>
        </div>
    </div>
  )
}

export default Logo