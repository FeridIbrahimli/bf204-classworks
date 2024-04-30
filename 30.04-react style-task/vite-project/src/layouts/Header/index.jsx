import { FaPhoneAlt } from "react-icons/fa"
import styles from "./header.module.scss";
const Header = () => {

  return (
    <header>
        <div id={styles["header-top"]}>
            <div className="container">
                <div className={styles["header-top"]}>
                    <a href="#">
                        <FaPhoneAlt />
                        +748 844 845 48 49
                    </a>
                    <nav>
                        <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Custumer service</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header