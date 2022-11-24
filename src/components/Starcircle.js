import star from "./images/icon-star.svg";
import style from "./Starcircle.module.css";
function Starcircle() {
  return (
    <div className={style.circle}>
      <img src={star} alt="star"></img>
    </div>
  );
}
export default Starcircle;
