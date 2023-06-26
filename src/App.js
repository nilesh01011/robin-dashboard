import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import StartingPage from "./pages/StartingPage";
import SuggestOrderQTY from "./pages/SuggestOrderQTYPage";
import CustomerMaster from "./pages/CustomerMaster";

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/customer' element={<CustomerMaster />}></Route>
        <Route path='/suggest-order-qty' element={<SuggestOrderQTY />}></Route>
        <Route path='/dashboard' element={<DashboardPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route exact path='/' element={<StartingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
