const Target1 = () => {
    return (
      <div className="bg-morado">
        <div className="container mx-auto flex flex-row py-8">
          <div className="w-2/3 flex items-center">
            <img src="/assets/images/oso1.png" width={257} height={274} className="w-237 h-274 rounded-lg" alt="Imagen" />
          </div>
          <div className="w-1/3 flex flex-col justify-start">
            <h1 className="text-crema text-3xl mb-4 text-right font-bold">GOMITAS DE OSO 200 GRS DE <br/> PURA DULZURA CON <br/> COLORES DE ARCOIRIRS Y <br/> CADA OSO UN SABOR <br/> DISTINTO</h1>
            <button className="bg-marino text-crema px-4 py-2 rounded-lg w-64 h-20 self-end">Comprar aquí</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Target1;
  
  