import './App.css';
import Navbar from './components/sharedComponents/Navbar';
import Footer from './components/sharedComponents/Footer';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
