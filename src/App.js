import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Entry from './component/Entry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes> 
<Route path='/' exact element={<Entry/>}/>
<Route path='/search' exact element={<Search/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
