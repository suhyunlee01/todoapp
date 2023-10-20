import { useState } from 'react';
import './todolistItem.scss';
import cn from 'classnames';

function TodolistItemComp(props){

    //props로 받아온 todos 배열의 각 요소인 todo
    const {id, text, checked} = props.todo;
    let [line, setLine] = useState('');
    console.log("아이디 텍스트 체크드",id,text,checked); //잘 들어옴

    const handleCheckboxChange = ()=>{
        props.changeChecked(id);
        {checked ? setLine('') : setLine('line')}
    }

    return(
        <div className='todolistItem'>
            <div className='todolistItem_container'>
                <span>
                     {/* cn은 여러개의 클래스명을 관리하게 해주는 도구이다. */}
                    {/* checked가 true로 들어오면 체크박스의 checked 속성이 true false로 들어오면 checked속성도 false가 되게 함 */}
                    <input type='checkbox' className={cn('checkbox', {checked})} checked={checked} onChange={handleCheckboxChange}></input>
                </span>
                <span className={line}>{text}</span>
                {/* props로 받은 onremove()에 todo의 id값을 전달함 */}
                <span><button onClick= {()=>props.onRemove(id)} className='btnRemove'>삭제</button></span>
            </div>
        </div>
    )
}

export default TodolistItemComp;