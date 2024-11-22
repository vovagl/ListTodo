import React from 'react'
import css from './form.module.css';
//import { ListTodos } from './ListTodos';


export default function Form({ todo, open, onClick }) {
    return (
        <>

            {open &&
                < div className={css.wrapper} >
                    <div className={css.form}>
                        <div className={css.contant}>


                            <>
                                <div className={css.button}>
                                    <h2 className={css.todo}>Todo #{ }</h2>
                                    <button className={css.btn} onClick={onClick}>x</button>
                                </div >
                                <p>{ }</p>
                                <p></p>

                            </>





                        </div>


                    </div>
                </div >
            }
        </>
    )
}


