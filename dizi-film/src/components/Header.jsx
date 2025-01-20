import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to={"/"}>İzlenecekler</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to={"/watched"}>İzlenenler</Link>
                        </li>
                        <li>
                            <Link to={"/add"} className="btn">
                                <i className="fas fa-plus"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;