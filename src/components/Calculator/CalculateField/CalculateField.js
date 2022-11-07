import classes from "./CalculateField.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { cleanBut } from "../../../redux/slices/calculatorSlice/calculatorSlice";
function CalculateField() {

  const conclution = useSelector(store => store.calculator.conclution);
  const dispatch = useDispatch();
  const CleanBut = () => {
    dispatch(cleanBut());
  };
  return (
    <label className={classes.CalculateField}>
      Conclution:
      <input
        type="text"
        value={conclution}
        onChange={() => {}}
        className={classes.conclution}
      />
      <button onClick={CleanBut}>clean</button>
    </label>
  );
}

export default CalculateField;
