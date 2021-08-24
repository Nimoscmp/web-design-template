import AboutUs from "./components/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";


function App() {
  return (
    <>
      <Header/>

      <main>
        <Home/>
        <AboutUs/>
        <Services/>
      </main>
    </>
  );
}

export default App;
