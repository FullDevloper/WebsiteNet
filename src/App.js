
import './App.css';
import Home from './page/Home/Home';
import {Route,Routes} from "react-router-dom"
import BarilgaProduct from './components/BarilgaProduct';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route path='/home/buteegdehuun/:productId' element={<BarilgaProduct/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
