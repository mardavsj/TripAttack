import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const format = ({children}) => {
  return (
    <>
        <Head>
            <title>TripAttack</title>
        </Head>

        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </>
  )
}

export default format