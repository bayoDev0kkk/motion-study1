import './styles/style.scss';
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Choose from "./components/choose/choose";
import Servises from "./components/servises/servises";
import Feedback from "./components/feedback/feedback";
import Consultation from "./components/consultation/consultation";
import Footer from "./components/footer/footer";
function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <About/>
        <Choose/>
        <Servises/>
        <Feedback/>
        <Consultation/>
        <Footer/>
      </>
  );
}

export default App;
