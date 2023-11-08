import Menu from "./components/Pizza/Menu";
import Footer from "./components/Pizza/Footer";
import Header from "./components/Pizza/Header";
import Steps from "./components/Steps/Steps";
import DateComp from "./components/DateComp/DateComp";
import TravelList from "./components/TravelList/TravelList";
import Accordion from "./components/Accordion/Accordion";
import Challenge from "./components/Challenge/Challenge";
import EatAndSlpit from "./components/Eat and split/EatAndSlpit";
import Movie from "./components/Movie/Movie";
import Friends from "./components/Eat and split2/Friends";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import LocatorMap from "./components/Geolocation/LocatorMap";
// import { pizzaData } from "./data"

function App() {
  return (
    <>
      <div className="container">
        <TravelList />
        <Header />
        <Menu />
        <Footer />
        <Steps />
        <DateComp />
        <Accordion />
        <Challenge />
        <EatAndSlpit />
        <Movie />
        <Friends />
        <CurrencyConverter />
        <LocatorMap />
      </div>
    </>
  );
}

export default App;
