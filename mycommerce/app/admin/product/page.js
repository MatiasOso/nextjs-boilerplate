'use client';
import {useState} from 'react'
// CREO QUE AQUI SE CREAN LOS PRODUCTOS UNA VEZ HECHA LA CONFIGUARACION A LA BASE DE DATOAS DARLE DISEÑO ;)
const Admin = () => { 
    const [files, setFiles] = useState([]) 
    const deleteImage = (index) => {
        setFiles(oldValues => {
            return oldValues.filter((_, i) => i !== index)
          })
    }
    const handleFileChange = (e) => {
        for (const file of e.target.files) {
            setFiles(oldValues => [...oldValues, file])
            e.target.value = null;
        }
        console.log(files)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const brand = e.target.brand.value
        const price = (e.target.price.value)
        const stock = (e.target.stock.value)
        const description = e.target.description.value

        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('description', description);
        for(const file of files){
        formData.append('images', file);
        }

        fetch('http://localhost:3000/api/v1/product', {
            body: (formData),
            method: 'POST',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="container bg-crema">
            <h1>Mantenedor de Productos</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data' method='POST'>
                    <div className="relative z-0 w-full mb-6 group text-crema">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="brand" id="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="brand" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="stock" id="stock" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="stock" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="images">Upload file</label>
                    <input className="sr-only" onChange={handleFileChange} aria-describedby="user_avatar_help" id="images" type="file"/>
                    <output>
                        {files && Array.from(files).map((file, index) => (
                            <div key={index} className="flex items-center mt-2">
                                <span className='hover:bg-blue-200' onClick={()=> deleteImage(index)} >&times;Delete</span> 
                                <img className="w-10 h-10 rounded-full mr-4" src={URL.createObjectURL(file)} alt="Avatar Upload" />
                                <div className="flex-1">
                                    <h2 className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</h2>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{file.size} bytes</p>
                                </div>
                            </div>
                        ))}
                    </output>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>

            </form>
        </div>
    )
}

export default Admin