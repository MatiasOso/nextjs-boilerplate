'use client';
import Registro from '@/components/Registrarse'
import Login from '@/components/Login'

const Usuarios = () => {
  // const [data, setData] = useState(null);
  
//   useEffect(() => {
//     fetch('/api/v1/user', {
//       method: 'POST',
//       body: JSON.stringify({ name: 'Juan', email: 'juan@gmailc.om', password: '123456' }),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
// }
const handleSave = async (e) => {
    e.preventDefault();
    console.log('hola', e);
    // formData = new FormData(e.target);
 }
      
  return (
    <div className="bg-crema">
      {/* <Registro/> */}
      {/* <Login/> */}
          <div className="flex justify-center items-center h-screen">
            <div className="bg-crema p-8 rounded-lg">
              <h1 className="text-morado text-3xl font-bold mb-4">Registro</h1>
              <form className="flex flex-col justify-center items-center" method="post" action="/api/v1/user">
                <div className="flex flex-col justify-center items-center mb-4">
                  <label className="text-morado text-lg font-bold">Nombre</label>
                  <input className="border-2 border-morado rounded-lg w-64 h-10" type="text" placeholder="Nombre" required/>
                  <label className="text-morado text-lg font-bold">Correo</label>
                  <input className="border-2 border-morado rounded-lg w-64 h-10" type="email" placeholder="Correo" required/>
                  <label className="text-morado text-lg font-bold">Contraseña</label>
                  <input className="border-2 border-morado rounded-lg w-64 h-10" type="password" placeholder="Contraseña" required/>
                </div>
                <div className="flex flex-row">
                  <input type="submit" value="Registrarse" className="bg-morado text-crema px-4 py-2 rounded-lg w-32 h-20 self-end mr-2"/>
                  <button className="bg-morado text-crema px-4 py-2 rounded-lg w-32 h-20 self-end ml-2">Log with Google</button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

// function addUser() {
//   const [data, setData] = useState(null);
  
//   useEffect(() => {
//     fetch('/api/v1/user', {
//       method: 'POST',
//       body: JSON.stringify({ name: 'Juan', email: 'juan@gmailc.om', password: '123456' }),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
// }

export default Usuarios