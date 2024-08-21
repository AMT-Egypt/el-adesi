import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Froms from "../components/Froms";
import Header from "../components/Header";
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";

const Main = () => {
    return (
        <div className='min-h-screen w-full flex flex-col justify-between'>
            <Header />
            <Routes>
                <Route path="/" element={<Froms />} />
                <Route path="/services" element={<Services />} />
                <Route path="/servicesDetails/:id" element={<ServicesDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Main;
