import style from "./Text.module.css";

function Text() {
  return (
    <div>
      <div className={style.bigText}>How did we do?</div>
      <p className={style.smallText}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

export default Text;
