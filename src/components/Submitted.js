import illustration from "./images/illustration-thank-you.svg";
import Selected from "./Selected";
import style from "./Text.module.css";
import center from "./Submitted.module.css";
function Submitted(props) {
  return (
    <div className={center.container}>
      <img src={illustration} />
      <Selected rated={props.rated} />
      <div className={style.bigText}>Thank you!</div>
      <p className={style.smallText} style={{ textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Submitted;
