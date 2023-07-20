const Registro = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-crema p-8 rounded-lg">
        <h1 className="text-morado text-3xl font-bold mb-4">Registro</h1>
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <label className="text-morado text-lg font-bold">Nombre</label>
            <input className="border-2 border-morado rounded-lg w-64 h-10" type="text" placeholder="Nombre" required/>
            <label className="text-morado text-lg font-bold">Correo</label>
            <input className="border-2 border-morado rounded-lg w-64 h-10" type="email" placeholder="Correo" required/>
            <label className="text-morado text-lg font-bold">Contraseña</label>
            <input className="border-2 border-morado rounded-lg w-64 h-10" type="password" placeholder="Contraseña" required/>
            <label className="text-morado text-lg font-bold">Confirmar contraseña</label>
            <input className="border-2 border-morado rounded-lg w-64 h-10" type="password" placeholder="Confirmar contraseña" required />
          </div>
          <div className="flex flex-row">
            <button className="bg-morado text-crema px-4 py-2 rounded-lg w-32 h-20 self-end mr-2">Registrarse</button>
            <button className="bg-morado text-crema px-4 py-2 rounded-lg w-32 h-20 self-end ml-2">Log with Google</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registro