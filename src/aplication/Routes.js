import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home"


//import PrivateRoute from "./privateRoute";

const Router = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route index element={<Home />} />

                </Route>
                <Route path="*" element={<div><h2>404 not found</h2></div>} />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
};

export default Router;