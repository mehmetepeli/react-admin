import "./app.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import AppLayout from "./AppLayout";

function App() {
    const user = (localStorage.getItem("persist:root")) ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).isAdmin : null;

  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={user ? <Navigate to="/" replace /> : <Login/>} />
              { user &&
                  <Route element={<AppLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/user/:userId" element={<User />} />
                      <Route path="/newUser" element={<NewUser />} />
                      <Route path="/products" element={<ProductList />} />
                      <Route path="/product/:productId" element={<Product />} />
                      <Route path="/new-product" element={<NewProduct />} />
                  </Route>
              }
          </Routes>
      </BrowserRouter>
  );
}

export default App;
