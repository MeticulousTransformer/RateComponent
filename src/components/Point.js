import style from "./Point.module.css";

function Points(props) {
  return (
    <button
      type="button"
      className={style.circle}
      style={
        props.point === props.rated
          ? { backgroundColor: "#7C8798", color: "white" }
          : { backgroundColor: "" }
      }
      onClick={() => {
        props.setRated(props.point);
      }}
    >
      {props.point}
    </button>
  );
}
export default Points;
