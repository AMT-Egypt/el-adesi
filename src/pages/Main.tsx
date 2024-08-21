import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Froms from "../components/Froms";
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";

const Main = () => {
    return (
        <div className='min-h-screen'>
            <Header/>
            <Routes>
                <Route path="/" element={<Froms/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/servicesDetails/:id" element={<ServicesDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Main;
