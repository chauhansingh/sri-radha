import './app.css'
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Transactions from './pages/transactions/Transactions';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}></Route>
        <Route path="/products" element={<ProductList/>}></Route>
        <Route path="/transactions" element={<Transactions/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
