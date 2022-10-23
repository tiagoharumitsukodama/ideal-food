import { Outlet, Link } from "react-router-dom";
import "./styles.css"

const Layout = () => {
  return (
    <div className="layoutStyle">
      <nav className="navStyle">
          <div className="itemStyle">
            <Link to="/">Home</Link>
          </div>
          <div className="itemStyle">
            <Link to="/recipe-form">Recipe Form</Link>
          </div>
          <div className="itemStyle">
            <Link to="/ingredient-form">Ingredient Form</Link>
          </div>
      </nav>
      <body className="bodyContent">
        <Outlet />
      </body>
    </div>
  )
};

export default Layout;