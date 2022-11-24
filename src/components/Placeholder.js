import Points from "./Point";
import Starcircle from "./Starcircle";
import Text from "./Text";
import Submit from "./Submit";
import style from "./Placeholder.module.css";
import stule from "./Point.module.css";
import Submitted from "./Submitted";
import { useState } from "react";

function Placeholder() {
  const [rated, setRated] = useState(0);
  const [submited, setSubmitted] = useState(false);
  const pointArray = [1, 2, 3, 4, 5];
  {
    if (!submited) {
      return (
        <div className={style.Placeholder}>
          <Starcircle />
          <Text />
          <div className={stule.rating}>
            {pointArray.map((point) => {
              return <Points rated={rated} setRated={setRated} point={point} />;
            })}
          </div>
          <Submit
            submited={submited}
            setSubmitted={setSubmitted}
            rated={rated}
          />
        </div>
      );
    } else {
      return (
        <div className={style.Placeholder}>
          <Submitted rated={rated} />
        </div>
      );
    }
  }
}

export default Placeholder;
