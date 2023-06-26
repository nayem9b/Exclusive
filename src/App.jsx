import HotOffer from "./assets/Components/LandingPage/HotOffer";
import ProductCart from "./assets/Components/LandingPage/ProductCart";
import Navbar from "./assets/Components/navbar";

function App() {
  return (
    <div>
      <HotOffer></HotOffer>
      <Navbar></Navbar>
      <ProductCart></ProductCart>
      <h1 className="text-7xl text-red-400">Hello</h1>
    </div>
  );
}

export default App;
