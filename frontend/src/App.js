import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import{ BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import axios from 'axios';
import {useEffect,useState} from 'react';

function App() {
  const[products, setProducts]=useState([]);

  useEffect(()=>{
    async function getProducts()
    {
      const result = await axios.get('/api/v1/products');
      setProducts(result.data.products);
    }

    getProducts();


  },[]);

  return (
    <Router>
      <Navigation />
      <Header />

      <Routes>
        <Route path="/" element={<Content products={products} />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
