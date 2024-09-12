
import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

function App() {


  return (
    <>
        <div className='flex flex-col gap-10'>
            <Header/>
            <Hero/>
        </div>
    </>
  )
}

export default App
