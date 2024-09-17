import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import Footer from "../components/Footer.tsx";

function Homepage() {
    return (
        <>
            <div className='flex flex-col gap-10'>
                <Header/>
                <Hero/>
            </div>

            <HowItWorks/>
            <Footer/>
        </>

    )

}

export default Homepage;