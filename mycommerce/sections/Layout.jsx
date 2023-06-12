'use client';

import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import Card from '@/components/Card'
import Cart from '@/components/Cart'
import Sidebar from '@/components/Sidebar'
export function Layout() {


    return (
        <>
        <Sidebar></Sidebar>
                <Header/>
                <main>
                    <Cart />
                    <Product />
                    <div className='flex flex-row'>
                        <Card>ESTO ES UNA TARJETA</Card>
                        <Card>ESTO ES UNA TARJETA</Card>
                        <Card>ESTO ES UNA TARJETA</Card>
                        <Card>ESTO ES UNA TARJETA</Card>
                        <Card>ESTO ES UNA TARJETA</Card>
                    </div>

                </main>
                <Footer />
        </>
    )
}

export default Layout