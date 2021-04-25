import './App.css';
import {Home } from './components/Home'
import {About } from './components/About'
import  Product from './components/Product'
import {ProductDetails} from './components/ProductDetails'
import {ProductHome} from './components/ProductHome'
import {Routes,Route,useParams, useNavigate} from 'react-router';
import {Link} from 'react-router-dom'
// if we want to display not found for this we use function NotFound
function NotFound(){
  return <div>Path Not Found</div>
}
/*function Mobile(){
  return <div>Mobile Category</div>
}
function Laptop(){
  return <div>Laptop Category</div>
}*/

/* Navigation Bar
function About(){
  return <div>
    About
  </div>
}
function Invoice(){
  let {InvoiceId}=useParams();
  return <div>
    <h1>Invoice {InvoiceId} </h1>
  </div>
}
function Home(){
  return <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link>|{' '}
      <Link to="about">About</Link>|{' '}
      <Link to="invoices/:InvoiceId">Invoices</Link>
    </nav>
    Home Page
  </div>
}
//Reading URL Parameters
*/
function App() {
  const navigate=useNavigate();
  return (
    <div> 
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> {'  '}
        <Link to="about">About</Link>{'  '}
        <Link to="product">Product</Link>{'  '}
        <Link to="product/mobile">Mobile</Link>{'  '}
        <Link to="product/laptop">Laptop</Link>
        <button onClick={()=>{
          navigate('./product')
        }}>
          Display Data
        </button>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} /> {' '}
        <Route path ='about' element={<About />} ></Route>
        <Route path="product/" element={<Product />}>
          <Route path="/" element={<ProductHome /> }></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
