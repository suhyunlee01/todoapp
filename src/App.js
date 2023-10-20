import './App.css';
import TodoInsert from './components/todoInsert';
import TodoListComp from './components/todoList';
import TodoTemplate from './components/todoTemplate';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
  ]);

  //nextId라는 Ref 객체 생성
  //nextId의 초기값 = 0
  //nextId/current += 1을 통해 아이디 값을 1씩 증가하게 함.
  const nextId = useRef(0);

  const onInsert = useCallback(
    //text = input.value
    (text)=>{
      const todo = {
        //useRef로 저장해둔고유 ID의 현재값
        id : nextId.current,
        text,
        checked : false,
      };
      //배열에 배열 하나를 추가해서 새로운 배열을 생성하는 메서드 concat
      //todos 배열에 todo를 추가해서 새로운 todos 반환해서 업데이트함. 업데이트 됨에 따라 화면에 다른 todos 출력
      setTodos(todos.concat(todo));

      //현재 nextId에 저장된 숫자에서 +1해서 다음 생성될 todo의 id값으로 대기시킴
      nextId.current += 1;
  }, [todos]);

  //콜백함수를 기억했다가 의존 배열인 todos가 바뀔 때만 해당 함수가 생성되도록 함.
  //즉, todos 배열이 바뀌면 setTodos로 todos 배열을 관리한다.
  const onRemove = useCallback(
    (id) => {
      //인자로 받은 id(삭제하려는 todo)와 다른 것들만 모아서 새로운 todos 배열을 만든다.
      //새롭게 todos가 업데이트 됨에 따라 컴포넌트가 리랜더링되며 화면에 새로운 배열 출력
      setTodos(todos.filter(todo=> todo.id !== id));
      },[todos])

  const changeChecked = (id) => {
    console.log(id); //id 잘 들어옴
    setTodos(
      todos.map((todo) =>
      //만약 todos 배열의 todo의 id가 인자로 받은 id와 같을 경우
      //todos 배열에 저장된 todo 오브젝트을 해제하고,
      //해제된 todo 오브젝트의 checked value를 지금 현재의 값의 반대값으로 설정
      //그 후 해제한 todo와 변경된 checked를 다시 오브젝트로 묶어준다.

      //만약 todos 배열의 todo의 id가 인자로 받은 id와 같지 않은 것은
      //그냥 원래 todo 그대로를 출력함
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoListComp todos={todos} changeChecked={changeChecked} onRemove={onRemove}></TodoListComp>
      </TodoTemplate>
    </div>
  );
}

export default App;
