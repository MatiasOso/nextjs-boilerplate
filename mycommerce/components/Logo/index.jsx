import { data } from "autoprefixer"
import Image from "next/image"
const styles = {
   container : {
         logo: 'w-1/8 bg-green-200',
         
   }
}

const Logo = ({data}) => {
  return (
    <div className="flex flex-row p-4">
        <div><Image src='/assets/logo.svg' width={120} height={120} alt='image' priority/> </div>
        <div className="flex flex-col justify-center items-center"> 
            <div className="text-xl font-black"> EMPRESA </div>
            <div className="text-xs font-thin"> SLOGAN </div>
        </div>
    </div>
  )
}

export default Logo