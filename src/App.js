import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import History from './Pages/History';
import CatogoryData from './Pages/CatogoryData';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Header/>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/main' element={<MainPage></MainPage>}></Route>
      <Route path='/history' element={<History></History>}></Route>
      <Route path='/cards/:id' element={<CatogoryData></CatogoryData>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
