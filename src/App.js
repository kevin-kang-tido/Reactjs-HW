import logo from './logo.svg';
import './App.css';
import Card, { Show_api } from './components/Card';
import { products } from './Data/products';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Read from './pages/Read';
import About from './pages/About';


function App() {
  return (
    <div className="App">

      {/* new projects */}
      <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/read'element={<Read/>}/>
        <Route path='/about-us'element={<About/>}/>
      </Routes>
      <Footer/>
      </>












      {/* ---Old project--- */}
      {/* <Home/> */}
      {/* normal Card */}
      {/* <div className="container mt-4">
        <div className="row g-4">
        <div className="col-12 col-sm-6 col-xl-3">
        < Card
            imageURl="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_640.jpg"
            bigtitle="Khmer Nature"
            desc="hello"
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_640.jpg"
                bigtitle="Ocean"
                desc="hello"

        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2023/05/23/15/13/new-8012937_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        /> 
      </div>
      <div className="col-12 col-sm-6 col-xl-3">
        < Card
                imageURl="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"
                desc="hello"
                bigtitle="Khmer Nature"
        
        /> 
      </div>
        </div>
      </div> */}

     {/* test api */}
      {/* <div className="container mt-5">
        <div className="row g-4">
          {
            products.map((product) =>(
              <div
              key={product.id}
              className='col-12 col-sm-6 col-xl-4'>
                <Show_api
                titiless={product.title}
                imageURll={product.images[0]}
                descc={product.description}
                />
              </div>
            ))
          }
      </div>
      </div> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
