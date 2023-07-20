
export default function showProductos({ productos }) {
  return (
    <div>
      <h1>Productos</h1>
      {productos.map((producto) => (
        <div key={producto._id}>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio_venta}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}  
    </div>
  );
}
import React from 'react'


export async function getStaticProps() {
  const db = await connectToDatabase();
  const productos = await db.collection('ecommerce').find({}).toArray();

  return {
    props: {
      productos: JSON.parse(JSON.stringify(productos)),
    },
  };
}
