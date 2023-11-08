import '../src/styles/App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { RouterPaths } from './routes/RouterPaths.routes'

function App() {

  return (
    <>
      <Header />
      <RouterPaths />
      <Footer />
    </>
  )
}

export default App
