import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Home } from './Component/Home';
import { Aboutus } from './Component/Aboutus';
import { Courses } from './Component/Courses';
import { PlaneCompo } from './Component/PlaneCompo';
import { JoinNowcompo } from './Component/JoinNowcompo';
import { TeamCompo } from './Component/TeamCompo';
import { Blogcompo } from './Component/Blogcompo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Aboutus></Aboutus>
      <Courses></Courses>
      <PlaneCompo></PlaneCompo>
      <JoinNowcompo></JoinNowcompo>
      <TeamCompo></TeamCompo>
      <Blogcompo></Blogcompo>
    </div>
  );
}

export default App;
