import Header from "../components/Header";
import Sliderbar from "../components/Sliderbar";
import Footer from "../components/Footer";

function DefaultLayout({children}) {
    return ( <div>
        <Header/>
        <Sliderbar/>
        {children}
        <Footer/>
    </div>);
}

export default DefaultLayout;