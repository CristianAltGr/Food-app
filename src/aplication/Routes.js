import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";
import PhotoEarth from "../pages/photoEarth/PhotoEarth";
import Asteroid from "../pages/asteroid/Asteroid"
import AsteroidItem from "../pages/asteroidItem/AsteroidItem";
import Rober from "../pages/rober/Rober";
import Techport from "../pages/techport/Techport";
import PrivateRoute from "./PrivateRoutes";


const Router = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route index element={<Home />} />
                    <Route path="projects/earth/" element={<PrivateRoute />} >
                        <Route index element={<PhotoEarth />} />
                    </Route>
                    <Route path="projects/asteroids/" element={<PrivateRoute />} >
                        <Route index element={<Asteroid />} />
                    </Route>
                    <Route path="projects/asteroids/:id" element={<PrivateRoute />} >
                        <Route index element={<AsteroidItem />} />
                    </Route>
                    <Route path="projects/rober" element={<PrivateRoute />}>
                        <Route index element={<Rober />} />
                    </Route>
                    <Route path="projects/techport" element={<PrivateRoute />} >
                        <Route index element={<Techport />} />
                    </Route>
                </Route>
                <Route path="*" element={<div><h2>404 not found</h2></div>} />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
};

export default Router;