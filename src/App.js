import logo from './logo.svg';
import './App.css';
import { TopMain } from './components/top-main';
import { ShopDetail } from './components/ShopDetail';
import { Subcribe } from './components/Subcribes';
import { Footer } from './components/footer';

function App() {
  return (
    <>
    <TopMain></TopMain>
    <ShopDetail></ShopDetail>
    <Subcribe></Subcribe>
    <Footer></Footer>
    </>
    
  );
}

export default App;
