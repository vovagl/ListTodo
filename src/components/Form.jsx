import React from 'react'
import css from './form.module.css';
import { UserList } from './UserList';

export default function Form({ todo, close }) {
    function clickCheck(e) {
        if (e.target.className === 'form_wrapper__CY56W') {
            close()
        }
    }

    return (
        < div className={css.wrapper} onClick={clickCheck} >
            <div className={css.contant}>
                <div className={css.button}>
                    <h2 className={css.todo}>Todo #{todo.id}</h2>
                    <button className={css.btn} onClick={close}>x</button>
                </div >
                <p className={css.title}>{todo.title}</p>
                <p className={css.status} ><span className={!todo.completed ? css.red : css.green}>{todo.completed ? `Done` : `Planed`} </span>by <span className={css.name}>{UserList.find(user => user.id === todo.userId)?.name || 'нет имени'}</span></p>
            </div>
        </div >
    )
}


