import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import PhotoEarth from "../pages/photoEarth/PhotoEarth";
import Asteroid from "../pages/asteroid/Asteroid"
import AsteroidItem from "../pages/asteroidItem/AsteroidItem";
import Rober from "../pages/rober/Rober";
import Techport from "../pages/techport/Techport";


const Router = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route index element={<Home />} />
                    <Route path="projects/" element={<List />} />
                    <Route path="projects/earth/" element={<PhotoEarth />} />
                    <Route path="projects/asteroids/" element={<Asteroid />} />
                    <Route path="projects/asteroids/:id" element={<AsteroidItem />} />
                    <Route path="projects/rober" element={<Rober />} />
                    <Route path="projects/techport" element={<Techport />} />


                </Route>
                <Route path="*" element={<div><h2>404 not found</h2></div>} />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
};

export default Router;