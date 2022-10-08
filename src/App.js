import './styles/style.scss';
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Choose from "./components/choose/choose";
import Servises from "./components/servises/servises";
import Feedback from "./components/feedback/feedback";
import Consultation from "./components/consultation/consultation";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
      <>
        <Header/>
          <Hero/>
        <Choose/>
        <Servises/>
        <Feedback/>
        <Consultation/>
        <Footer/>
          {/*<Routes>*/}
          {/*    <Route path='/' element={<Hero/>}/>*/}
          {/*</Routes>*/}
      </>
  );
}

export default App;
