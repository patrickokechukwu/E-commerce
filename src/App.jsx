
// import './App.css'
// import Navbar from './Components/Navbar/Navbar.jsx'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Shop from './Pages/Shop';
// import Products from './Pages/Product.jsx'
// import ShopCategory from './Pages/ShopCategory.jsx';
// import LoginSignup from './Pages/LoginSignup.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import Menbanner from './Components/Assets/banner_mens.png'
// import Womenbanner from './Components/Assets/banner_women.png'
// import Kidbanner from './Components/Assets/banner_kids.png'
// import ProductDisplay from './Components/ProductDisplay/ProductDisplay.jsx';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//        <Route path='/' element={<Shop/>}/>
//        <Route path='/mens' element={<ShopCategory banner={Menbanner} category="men"/>}/>
//        <Route path='/womens' element={<ShopCategory banner={Womenbanner} category="women"/>}/>
//        <Route path='/kids' element={<ShopCategory banner={Kidbanner} category="kid"/>}/>
//        <Route path="/product" element={<product/>}>
//        <Route path=':productId' element={<ProductDisplay/>}/>
//        </Route>
//         <Route path='/cart' element={<cart/>}/>
//         <Route path='/login' element={<LoginSignup/>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Products from './Pages/Product.jsx'
import ShopCategory from './Pages/ShopCategory.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Menbanner from './Components/Assets/banner_mens.png'
import Womenbanner from './Components/Assets/banner_women.png'
import Kidbanner from './Components/Assets/banner_kids.png'
import Cart from './Pages/Cart.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={Menbanner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={Womenbanner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={Kidbanner} category="kid" />} />
          <Route path='/product/:productId' element={<Products />} /> {/* Updated route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

