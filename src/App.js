import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Slide from "./components/Slide";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavbarMenu />
      <Slide />
      <Testimonials style={{ marginTop: 30 }} />
      <Footer/>
    </div>
  );
}

export default App;
