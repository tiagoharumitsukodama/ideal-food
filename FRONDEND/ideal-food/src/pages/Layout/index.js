import { Outlet, Link } from "react-router-dom";
import {
  layoutStyle,
  navStyle
} from "./styles"

const Layout = () => {
  return (
    <div style={layoutStyle}>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe-form">Recipe Form</Link>
          </li>
          <li>
            <Link to="/ingredient-form">Ingredient Form</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;