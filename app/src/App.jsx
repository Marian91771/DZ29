import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </>
  )
}

export default App
