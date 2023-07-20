import Image from "next/image"
const styles = {
   container : {
         logo: 'w-1/8 bg-green-200',
         
   }
}

const Logo = ({data}) => {
  return (
    <Image id="logoprincipal" className="w-full flex  p-4 bg-blue" src="/assets/images/logotipo.png" width={300} height={150} alt='image' priority/>

  )
}

export default Logo