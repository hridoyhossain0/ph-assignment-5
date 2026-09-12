import { Suspense } from "react"
import Footer from "./Components/Footer/Footer"
import Nav from "./Components/Header/Nav"
import Hero from "./Components/HeroSection/Hero"
import { ToastContainer } from "react-toastify";
import Tech from "./Components/TechDataSection/Tech"
import Loading from "./Components/Loading/Loading"


const PromiseTech = async() => {
  const res = await fetch('/TechInfo.json');
  const data = await res.json();
  return data;
}


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <div className='container mx-auto' >
        <Suspense fallback={<Loading/>}>
          <Tech PromiseTech={PromiseTech()}/>
          <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </Suspense>
      </div>
        
        
      <Footer/>
    </>
  )
}

export default App
