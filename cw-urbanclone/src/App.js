import './App.css';
import AllRoute from './Components/AllRoutes/Route';

import Navbar from './Pages/Navbar';
import Footer from "./Components/Footer.tsx"

function App() {
  return (
    <div >
      <Navbar/>
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
