import './App.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAsync, selectLoggedInUser, selectUserChecked } from './features/auth/authSlice';
import { useEffect } from 'react';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/PageNotFound';
import OrderSucessPage from './pages/OrderSuccessPage';
import UsersOrderPage from './pages/UsersOrderPage';
import UsersProfilePage from './pages/UsersProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrderspage from './pages/AdminOrdersPage';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import StripeCheckout from './pages/StripeCheckout';
import ResetPasswordPage from './pages/ResetPasswordPage';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/",
    element: <Protected><Home></Home></Protected>,
  },
  {
    path: "/admin",
    element: <ProtectedAdmin><AdminHome></AdminHome></ProtectedAdmin>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/admin/product-detail/:id",
    element: <ProtectedAdmin><AdminProductDetailPage></AdminProductDetailPage></ProtectedAdmin>,
  },
  {
    path: "/admin/product-form",
    element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>,
  },
  {
    path: "/admin/orders",
    element: <ProtectedAdmin><AdminOrderspage></AdminOrderspage></ProtectedAdmin>,
  },
  {
    path: "/admin/product-form/edit/:id",
    element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>,
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSucessPage></OrderSucessPage>{' '}
      </Protected>
    ),
  },
  {
    path: "/my-orders",
    element: (
      <Protected>
        <UsersOrderPage></UsersOrderPage>{' '}
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UsersProfilePage></UsersProfilePage>{' '}
      </Protected>
    ),
  },
  {
    path: "/stripe-checkout/",
    element: (
      <Protected>
        <StripeCheckout></StripeCheckout>
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage></ResetPasswordPage>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(()=>{
    dispatch(checkAuthAsync())
  },[]);
  
  useEffect(()=>{
    
    if(user){
      dispatch(fetchItemsByUserIdAsync());
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  },[dispatch , user]);
  
  return (
    <div className="App">
      {userChecked && <Provider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </Provider>}
      {/* Link must be inside the Provider */}
    </div>
  );
}

export default App;
