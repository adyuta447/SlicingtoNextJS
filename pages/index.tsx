import { useEffect } from "react"
import AOS from 'aos';
import Navbar from "../components/organisms/Navbar";
import Header from "../components/organisms/Header";
import Brands from "../components/organisms/Brands";
import Features from "../components/organisms/Features";
import Ornament from "../components/atoms/Ornament";
import Pricing from "../components/organisms/Pricing";
import ContactUs from "../components/organisms/ContactUs";
import Footer from "../components/organisms/Footer";


export default function Home() {
useEffect(() => {
    AOS.init();
},[])
  return ( 
    <>
     <section className="abovefold pt-md-5">
        <img src="/images/dark-mode/Ornament.png" alt="bg-header" className="img-header d-none d-md-block" />
         <Navbar />
         <Header />
    </section>
    
    <Brands />
    <Features /> 
    <Ornament /> 
    <Pricing />
    <section className="ornament">
        <div className="d-flex justify-content-start">
            <img src="./images/dark-mode/Ornament-left.png" alt="ornament"
                className="ornament-left img-fluid d-none d-md-block" />
        </div>
    </section>

    <ContactUs /> 
    <Footer /> 
    </>
  )
}
