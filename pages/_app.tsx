import { Fragment } from 'react'
import Footer from '../components/footer'
import '../scss/custom.scss'

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Component {...pageProps} />
    <Footer />
  </Fragment> 
}

export default MyApp