import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Layout from './Layout';
import Lakme from './Components/Lakme';
import AddEditProduct from './Components/AddEditproduct';
import MAC from './Components/MAC';
import MaryKay from './Components/MaryKay';
import Sephora from './Components/Sephora';
import Loreal from './Components/Loreal';
import Maybelline from './Components/Maybelline';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}> </Route>
          <Route path='/lakmeProducts' element={<Lakme />}></Route>
          <Route path='/products/add' element={<AddEditProduct />}></Route>
          <Route path='/products/edit/:id' element={<AddEditProduct />}></Route>
          <Route path='/macProducts' element={<MAC />}></Route>
          <Route path='/maryKayProducts' element={<MaryKay />}></Route>
          <Route path='/sephoraProducts' element={<Sephora />}></Route>
          <Route path='/lorealParisProducts' element={<Loreal />}></Route>
          <Route path='/maybellineProducts' element={<Maybelline />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

);
