
import Navbar from "./components/navbar";
import Aboutus from "./components/landing/aboutus";
import Pricing from "./components/landing/pricing";
import Stats from "./components/landing/stats";
import Serverip from "./components/landing/serverIp";
import Footer from "./components/footer";




export default function Home() {
  return (
      <div>
        <Navbar/>  {/* Initiate navbar */ }
        <Aboutus/>  {/* Initiate aboutusSection */ }
        <Pricing/>  {/* Initiate aboutusSection */ }
        <Stats/>  {/* Initiate aboutusSection */ }
        <Serverip/>  {/* Initiate aboutusSection */ }
        
        
      </div>
  )
}