'use client'
import { use, useEffect, useState } from "react";
export default function Home() {

    return (
        <div>
            <Usuarios/>
        </div>
    );
}
function Usuarios(){
    const [data , setData] = useState(null);
    useEffect(() => {
        fetch('/api/v1/user')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);
    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {data?.data.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    // console.log(data);
}

function addUser() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('/api/v1/user', {
        method: 'POST',
        body: JSON.stringify({ name: 'Juan', email: 'juan@gmail.com', password: '123456' }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    // return (
    //     <div>
    //         <h1>Usuarios</h1>
    //         <form>  
    //             <label>Nombre</label>
    //             <input type="text" name="name" />
    //             <label>Email</label>
    //             <input type="text" name="email" />
    //             <label>Password</label>
    //             <input type="text" name="password" />
    //             <button type="submit">Enviar</button>
    //         </form>
  }
  
                

            