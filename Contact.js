import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://c4.wallpaperflare.com/wallpaper/319/976/955/5bd3adff6e89e-wallpaper-preview.jpg"
        title="Contact"
        btnClass="hide"
        />
        </>
    )
}
export default Contact;