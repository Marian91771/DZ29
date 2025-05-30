import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <Link to="/">Counter</Link> | <Link to="/todo">ToDo</Link>
        </>
    )
}