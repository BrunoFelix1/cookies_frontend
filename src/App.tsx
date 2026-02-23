import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import FeaturedCookies from "./components/FeaturedCookies";
import Gallery from "./components/Gallery";
import OrderNow from "./components/OrderNow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <FeaturedCookies />
        <Gallery />
        <OrderNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
