import "./App.css";

import ProductCatalog from "./pages/ProductCatalog";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ShopSmart Team
      </h1>

      <Login />

      <hr />

      <Register />

      <hr />

      <ProductCatalog />
    </div>
  );
}

export default App;