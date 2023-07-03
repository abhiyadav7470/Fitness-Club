import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Home } from './Component/Home';
import { Aboutus } from './Component/Aboutus';
import { Courses } from './Component/Courses';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Aboutus></Aboutus>
      <Courses></Courses>
    </div>
  );
}

export default App;
