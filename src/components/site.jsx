import { Route, Routes, useLocation } from 'react-router-dom';
import Main from "./main/Main/c";
import Main2 from "./main/Main2/c";
import Lucum from "./main/lucum/c";
import Audio from "./main/audio/c";
import { AnimatePresence } from "framer-motion"

function Anim() {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Main />}/>
                    <Route path='/xndir' element={<Main2 />}/>
                    <Route path='/lucum' element={<Lucum />}/>
                    <Route path='/audio' element={<Audio />}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default Anim;