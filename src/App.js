import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //includes: Header
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
