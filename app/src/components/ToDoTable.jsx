import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/ToDoSlice";

export default function ToDoTable() {

    const todos = useSelector(state => state.ToDos.data);
    const dispatch = useDispatch();


    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    }

    return (

        <div>
            {todos.length === 0 ?
                (<p>No data</p>)
                :
                (
                    <>
                        <p>Total: {todos.length}</p>
                        <ul>
                            {todos.map(item => (
                                <li key={item.id}>{item.value}<button onClick={() => handleDelete(item.id)}>Delete</button></li>
                            ))}
                        </ul>
                    </>
                )
            }
        </div>
    );
}