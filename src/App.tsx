import { Suspense } from "react"
import Footer from "./Components/Footer/Footer"
import Nav from "./Components/Header/Nav"
import Hero from "./Components/HeroSection/Hero"
import Tech from "./Components/TechDataSection/Tech"


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
      <Suspense fallback='Loading.....'>
        <Tech PromiseTech={PromiseTech()}/>
      </Suspense>
        
      <Footer/>
    </>
  )
}

export default App
