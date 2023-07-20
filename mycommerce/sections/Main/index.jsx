import Sweet from 'components/SweetDreams'
import Paleta from 'components/Paleta'
import Target1 from 'components/Target1'
import Target2 from 'components/Target2'
import Cortina from 'components/Panels'
const Main = () => {
  return (
    <div>
        <div className='flex flex-row bg-crema align-items-center justify-center items-center'>
        <Sweet/>
        <div className='flex justify-content-center align-items-center'>
        <Paleta/>
        </div>
        </div>
        <div>
            <Target1/>
            <Target2/>
            <Cortina/>
        </div>
    </div>
  )
}

export default Main
