const Target2 = () => {
    return (
      <div className="bg-rosapastel">
      <div className="container mx-auto flex flex-row py-8">
        <div className="w-2/3 flex flex-col justify-start">
          <h1 className="text-crema text-3xl  mb-4 text-left font-bold">GOMITAS DE GUSANO 200 <br/> GRS DE PURA DULZURA CON <br/> COLORES DE ARCOIRIRS Y <br/> CADA GUSANITO UN SABOR <br/> DISTINTO </h1>
          <button className="bg-marino text-crema px-4 py-2 rounded-lg w-64 h-20 self-start">Comprar aquí</button>
        </div>
        <div className="w-1/3 flex items-end justify-end">
          <img src="/assets/images/gusanitos.jpg" width={237} height={274} className="w-237 h-274 rounded-lg" alt="Imagen" />
        </div>
      </div>
    </div>
    )
  }      
  
  export default Target2