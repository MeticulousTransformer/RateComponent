import style from "./Selected.module.css";

function Selected(props) {
  return <p className={style.Selected}>You selected {props.rated} out of 5</p>;
}

export default Selected;
