import Man from "./img/man.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import styles from "./Scene1.module.css";

function Scene1() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#9775FA] h-[812px]">
      <img src={Man} alt="man" className={styles.manImage} />
      <div className={styles.textBox}></div>
      <div className={styles.text}>Look Good, Feel Good</div>
      <div className={styles.text2}>
        Create your individual & unique style and look amazing everyday.
      </div>
      <div onClick={() => navigate("/2")} className={styles.menBox}>
        <div className={styles.menText}>Men</div>
      </div>
      <div onClick={() => navigate("/2")} className={styles.womenBox}>
        <div className={styles.womenText}>Women</div>
      </div>
      <button onClick={() => navigate("/2")} className={styles.skipText}>
        Skip
      </button>
    </div>
  );
}

export default Scene1;
