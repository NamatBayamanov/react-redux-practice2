import classes from './CalculateCalculation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { equationMethod, helper, helper2 } from '../../../redux/slices/calculatorSlice/calculatorSlice';
function CalculateCalculation() {
  const symbol = useSelector((store) => store.calculator.symbol);
  const a = useSelector((store) => store.calculator.a);
  const b = useSelector((store) => store.calculator.b);
  const dispatch = useDispatch();
  const EquationMethod = () => {
    dispatch(equationMethod({symbol}));
  };
  const Helper = (e) => {
    let v1 = +e.target.value;
    dispatch(helper({v1}));
  };
  const Helper2 = (e) => {
    let v2 = +e.target.value;
    dispatch(helper2({v2}));
    
  };
  return ( 
    <div className={classes.CalculateCalculation}>
        <label>
          A: <input type="number" placeholder={a} value={a}  onChange={Helper} />
        </label>
        <span className={classes.symbol}>{symbol}</span>
        <label>
          B: <input type="number" value={b} placeholder={b} onChange={Helper2} />
        </label>
        <button onClick={EquationMethod}> Conclution</button>
      </div>
  );
}

export default CalculateCalculation;