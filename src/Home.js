import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services"
import Tours from "./Tours"
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footer />

            <script src="./js/app.js"></script>
        </>
    )
}
export default Home