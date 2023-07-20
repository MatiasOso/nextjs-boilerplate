'use client'
import React, { useEffect } from 'react';
import ChocolateItem from '@/components/Prueba1';
import { PrismaClient } from '@prisma/client';
import { getProduct } from '@/lib/db';

// bscar en prisma los chocolates 
// Modelo de documento en la coleccion chocolates para mapear
// {
//     id: '648bde92a82d30d414d05b1b',
//     cantidad: 300,
//     descripcion: 'Chocolates en forma de tren con un delicioso sabor a chocolate con leche. Perfectos para disfrutar en cualquier ocasión y compartir con amigos.',
//     elaboracion: '2023-06-18',
//     gramaje: '20 gramos',
//     nombre: 'Trencito',
//     precio_costo: 50,
//     precio_venta: 120,
//     url: 'https://www.manarchile.cl/wp-content/uploads/2018/05/Chocprem-leche.jpg',
//     vencimiento: '2023-12-18'
//   }

// const prisma = new PrismaClient();

export default function Home({ chocolates }) {
    useEffect(() => {
        console.log(chocolates);
    }
    )
    return (
        <div>
            <h1>Chocolates</h1>
            <div className="grid grid-cols-3 gap-4">
                {chocolates.map((chocolate) => (
                    <ChocolateItem key={chocolate.id} chocolate={chocolate} />
                ))}
            </div>
        </div>
    );
}

 
                