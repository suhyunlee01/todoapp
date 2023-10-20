import './todoInsert.scss';
import { useState, useCallback } from 'react';

function TodoInsert(props){

    const [value, setValue] = useState('');

    //input value가 value state에 저장됨
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    //제출 시 props로 받은 oninsert()메서드에 value값을 전달함.
    //그 후 value를 다시 초기화해서 다음 value 입력을 기다림
    const onSubmit = useCallback(
        e=>{
            props.onInsert(value);
            setValue('');
            //페이지 다시 로드되는 거 방지
            e.preventDefault();
        }, 
        //props의 onInsert 함수가 value 값 업데이트로 변경되었고 vlaue값도 업데이트 되었으니 onsubmit callback이 작동한 것.
        [props.onInsert, value],
    );

    return(
        <div>
            <form className='TodoInsert' onSubmit={onSubmit}>
                <input placeholder='할 일을 입력해주세요.' value={value} onChange={onChange}></input>
                <button type='submit'>저장</button>
            </form>
        </div>
    )
}

export default TodoInsert;