import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';

/*Routes*/
function App() {
  return(
    <>
      <Header />
      <Routes>

          <Route path="/" element= {<Home />} />
          <Route path="/products" element= {<Products />} />
          <Route path="/product/:id" element= {<Product />} />
          <Route path="/cart" element= {<Cart />} />
          <Route path="/checkout" element= {<Checkout />} />
    
    </Routes>
    <Footer />
      
    </>
  );

}

export default App;
