'use client';
import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import Cart from '@/components/Cart'
import Sidebar from '@/components/Sidebar'
import Main from './Main'
export function Layout() {


    return (
        <>
        <Sidebar></Sidebar>
                <Header/>
                    <Cart />
                    {/* <Product /> */}
                    <Main />
                <Footer />
        </>
    )
}

export default Layout