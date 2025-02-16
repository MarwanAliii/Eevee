import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoArr, settodoArr] = useState<Todo[]>([]);

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
  };

  console.log(todo);

  return (
    <div className="App">
      <span className="heading" >Eevee</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
