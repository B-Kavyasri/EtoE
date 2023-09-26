import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function  About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://w0.peakpx.com/wallpaper/915/361/HD-wallpaper-beautiful-night-autumn-foggy-beautiful-fog-lights-city-road-night-lanterns-romantic-romance-buildings-colors-clock-rainy-nature-rain-alley.jpg"
        title="About"
        btnClass="hide"
        />
        </>
    );
}
export default About;