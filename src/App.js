import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contests from './components/Contests/Contests';
import Studentlist from './components/Studentlist/Studentlist';
import ShowContests from './components/ShowContests/ShowContests';
import ShowStudentlist from './components/ShowStudentlist/ShowStudentlist';
import Login from './components/Login/Login';
import TeamAssign from './components/TeamAssign/TeamAssign';
import ShowTeams from './components/ShowTeams/ShowTeams';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/showcontests' element={<ShowContests></ShowContests>}></Route>
        <Route path='/contest' element={<Contests></Contests>}></Route>
        <Route path='/showstudentlist/:contestId' element={<ShowStudentlist></ShowStudentlist>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/teamassign' element={<TeamAssign></TeamAssign>}></Route>
        <Route path='/showteams' element={<ShowTeams></ShowTeams>}></Route>

        <Route path='/studentadd/:contestId' element={<Studentlist></Studentlist>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
