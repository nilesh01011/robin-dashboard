import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import StartingPage from "./pages/StartingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route exact path='/' element={<StartingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
