import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    ScrollToTop,
} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
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
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
