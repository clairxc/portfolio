import '../styles/globals.css'
import Navbar from '../components/navbar'

// can define all layouts here, and not in individual pages

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>


      <footer>
        @ Clair {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default MyApp
