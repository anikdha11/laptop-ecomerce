import './App.css';
import Home from './components/Home/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import { Routes, Route} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Shared/Footer/Footer';
import Account from './components/Account/Account/Account';


function App() {
  return (
    <div className="App">
  <Navigation></Navigation>
 <Routes>
   <Route index element={ <Home/>}/>
   <Route path='/contactus' element={ <ContactUs/>}/>
   <Route path='/account' element={<Account/>}/>
 </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
