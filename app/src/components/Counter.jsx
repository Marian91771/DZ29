import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../store/counterSlice";

export default function Counter(){

    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const plusCount = () => {
        dispatch(increment());
    };

    const minusCount = () => {
        dispatch(decrement());
    };

    return(
        <div>
            <p>{counter}</p>
            <button type="button" onClick={plusCount}>+</button>
            <button type="button" onClick={minusCount}>-</button>
        </div>
    )
}