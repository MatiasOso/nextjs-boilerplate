import Header from './Header'
import Footer from './Footer'
import Card from '@/components/Card'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
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