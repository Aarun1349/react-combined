import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Monsters from "./components/Monsters";
import Phonebook from "./components/Phonebook";
import Navbar from "./components/Navbar";
import MonsterDetails from "./components/MonsterDetails";
import Todo from "./components/Todo";
import TodoRedux from "./components/TodoRedux";
import ContextCounter from "./components/ContextCounter";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/todo" element={<Todo />}></Route>
        <Route exact path="/todoredux" element={<TodoRedux />}></Route>
        <Route exact path="/counter" element={<Counter />}></Route>
        <Route exact path="/phonebook" element={<Phonebook />}></Route>
        <Route exact path="/monsters" element={<Monsters />}></Route>
        <Route exact path="/contextcounter" element={<ContextCounter />}></Route>
        <Route
          exact
          path="/monsterdetails"
          element={<MonsterDetails />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
