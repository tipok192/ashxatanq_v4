import './App.css';
import Header from './components/header/c';
import Footer from './components/footer/c';
import { BrowserRouter, useLocation} from 'react-router-dom';
import Anim from './components/site';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Anim/>
       <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
