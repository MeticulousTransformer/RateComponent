import style from "./Submit.module.css";

function Submit(props) {
  return (
    <button
      className={style.Submit}
      onClick={() => {
        if (props.rated !== 0) {
          props.setSubmitted(!props.submited);
        } else {
          return <div style={{ color: "red" }}>Please rate us!</div>;
        }
      }}
    >
      Submit
    </button>
  );
}

export default Submit;
