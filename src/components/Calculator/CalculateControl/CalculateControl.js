import classes from "./CalculateControl.module.scss";
import { addingNum, divisionNum, minusNum, multiplicationNum } from "../../../redux/slices/calculatorSlice/calculatorSlice";
import { useDispatch } from "react-redux";

function CalculateControl() {
  const dispatch = useDispatch();
  const AddingNum = (e) => {
    dispatch(addingNum());
  };
  const MinusNum = (e) => {
    dispatch(minusNum());
  };
  const MultipleNum = (e) => {
    dispatch(multiplicationNum());
  };

  const DivisionNum = (e) => {
    dispatch(divisionNum());
  };

  return ( 
      <p className={classes.CalculateControl}>
        <button className={`${classes.adding} ${classes.digit}`} onClick={AddingNum} >+</button>
        <button className={`${classes.minus} ${classes.digit}`} onClick={MinusNum}>-</button>
        <button className={`${classes.multiple} ${classes.digit}`} onClick={MultipleNum}> *</button>
        <button className={`${classes.division} ${classes.digit}`} onClick={DivisionNum}>/</button>
      </p>
  );
}

export default CalculateControl;