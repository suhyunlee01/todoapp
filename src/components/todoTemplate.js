import './todoTemplate.scss';

function TodoTemplate({children}){
    return(
        <div className='TodoTemplate'>
            <div className='app-title'>TO DO LIST</div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default TodoTemplate;