'use client';

const Admin = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const brand = e.target.brand.value
        const price = e.target.price.value
        const stock = e.target.stock.value
        const description = e.target.description.value

        
    }
  return (
    <div>
        <h1>Mantenedor de Productos</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder='Escriba el nombre del Producto' />
            <br/>
            <input type="text" id="brand" placeholder='Marca' />
            <br/>
            <input type="number" id="price" placeholder='Precio' />
            <br/>
            <input type="number" id="stock" placeholder='Stock' />
            <br/>
            <input type="text" id="description" placeholder='Descripción' />
            <br/>
            <input type="number" id="stock" placeholder='Stock' />
            <br/>
            <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default Admin