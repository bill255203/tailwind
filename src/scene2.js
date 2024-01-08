import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Scene2.module.css";

function Scene2() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div onClick={() => navigate(-1)} className={styles.navbar}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="large">
            <ArrowBackIcon />
          </IconButton>
        </Stack>
      </div>
      <div className={styles.mainText}>Let’s Get Started</div>
      <div className={styles.fbBox}></div>
      <FontAwesomeIcon
        icon={faFacebookF}
        size="2xs"
        style={{ color: "#ffffff" }}
        className="absolute w-[22px] h-[22px] left-[136px] top-[335px]"
      />
      <div className={styles.fbText}>Facebook</div>
      <div className={styles.twitterBox}></div>
      <FontAwesomeIcon
        icon={faTwitter}
        size="2xs"
        style={{ color: "#ffffff" }}
        className="absolute w-[22px] h-[22px] left-[146.5px] top-[395px]"
      />
      <div className={styles.twitterText}>Twitter</div>
      <div className={styles.googleBox}></div>
      <FontAwesomeIcon
        icon={faGoogle}
        size="2xs"
        style={{ color: "#ffffff" }}
        className="absolute w-[18px] h-[18px] left-[147px] top-[455.5px]"
      />
      <div className={styles.googleText}>Google</div>
      <div className={styles.askText}>
        Already have an account?{" "}
        <div className="font-bold text-black"> Signin</div>
      </div>
      <div onClick={() => navigate("/3")} className={styles.createBox}>
        <div className={styles.createText}>Create an Account</div>
      </div>
    </div>
  );
}

export default Scene2;
