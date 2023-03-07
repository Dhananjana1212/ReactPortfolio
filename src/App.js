import "./App.css";
import AboutMe from "./screens/AboutMe";
import ContactMe from "./screens/ContactMe";
import HeroBody from "./screens/HeroBody";
import MyFooter from "./screens/MyFooter";
import MyHeader from "./screens/MyHeader";
import MyWorks from "./screens/MyWorks";

function App() {
  return (
    <>
      <MyHeader />
      <HeroBody />
      <AboutMe />
      <MyWorks />
      <ContactMe />
      <MyFooter />
    </>
  );
}

export default App;
