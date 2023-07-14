import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                                    <Hero />
                                </div>
                                <About />
                            </>
                        }
                    />
                    <Route
                        path="/work"
                        element={
                            <>
                                <Tech />
                                <Experience />
                                <Feedbacks />
                            </>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <>
                                <Works />
                            </>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <div className="relative z-0">
                                <Contact />
                                <StarsCanvas />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
