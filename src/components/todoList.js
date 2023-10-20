import './todoList.scss';
import TodolistItemComp from './todolistItem';

function TodoListComp(props){
    let {todos} = props;
    console.log(todos);

    return(
        <div className='todoList'>
            {todos.map((todo)=>{
                //todos 배열의 각 todo를 투두 아이템 컴포넌트에 props로 전달
                return <TodolistItemComp changeChecked={props.changeChecked} key={todo.id} todo={todo} onRemove={props.onRemove}></TodolistItemComp>
            })}
        </div>
    )
}
export default TodoListComp;