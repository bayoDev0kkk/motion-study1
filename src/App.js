import './styles/style.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import More from "./components/More/More";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Russia from "./components/More/russia/Russia";
import London from "./components/More/london/London";
import SouthKorea from "./components/More/southKorea/SouthKorea";
import Malaysia from "./components/More/malaysia/Malaysia";
import NewYourk from "./components/More/newYourk/NewYourk";
import Turkey from "./components/More/turkey/Turkey";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={ <Home/>}/>
                <Route path={'/more'} element={<More/>}/>
                <Route path={'/russia'} element={<Russia/>}/>
                <Route path={'/london'} element={<London/>}/>
                <Route path={'/southKorea'} element={ <SouthKorea/>}/>
                <Route path={'/malaysia'} element={<Malaysia/>}/>
                <Route path={'/newYork'} element={<NewYourk/>}/>
                <Route path={'/turkey'} element={<Turkey/>}/>
            </Routes>
            <Footer/>


        </>
    );
}

export default App;
