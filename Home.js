import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://static.toiimg.com/thumb/msid-89433382,width-748,height-499,resizemode=4,imgsize-89030/.jpg"
        title="Your Journey Your Way"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        </>
    );
}
export default Home;