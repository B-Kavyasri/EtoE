import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Service (){
    return(
        <>
         <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://loveincorporated.blob.core.windows.net/contentimages/gallery/95e0431c-b232-4481-a5ac-f6d09fd31c57-Manali-structuresxx.jpg"
        title="Service"
        btnClass="hide"
        />
        </>
    );
}
export default Service;