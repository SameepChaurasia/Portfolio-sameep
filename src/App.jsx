import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import ErrorOverlay from './components/ErrorOverlay'
import ErrorBoundary from './components/ErrorBoundary'


const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <ErrorOverlay />
        <Navbar/>   
        <ErrorBoundary>
          <Hero/>
        </ErrorBoundary>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
