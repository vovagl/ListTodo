import css from './header.module.css';
import { useState } from 'react';
import Content from './Content';
import Form from './Form';



export default function Header() {
    const [choice, setChoice] = useState(false);
    const [status, setStatus] = useState('All');
    const [open, setOpen] = useState(true);

    const onClickActive = () => {
        setStatus('Active')
        setChoice(!choice)
        //document.body.style.overflow = ''
    }

    const onClickChoose = () => {

        //document.body.style.overflow = 'hidden'

        setChoice(!choice)
    }

    const onClickCompleted = () => {
        setStatus('Completed')
        setChoice(!choice)
        //document.body.style.overflow = ''
    }

    const onClickAll = () => {
        setStatus('All')
        setChoice(!choice)
        //document.body.style.overflow = ''
    }

    const onClickOpenForm = (id) => {
        setOpen(!open)
    }



    return (
        <><Form open={open} onClick={onClickOpenForm} />

            <h1>Todos:</h1>
            <div className={css.input}>
                <div className={css.block}>
                    <input className={css.all} placeholder={status} onClick={onClickChoose}></input>

                    {choice &&
                        < div className={css.color}>
                            <p onClick={onClickAll} style={{ backgroundColor: status === 'All' ? '#c4ebfd;' : 'white' }}  >All</p>
                            <p onClick={onClickActive} style={{ backgroundColor: status === 'Active' ? '#c4ebfd;' : 'white' }}>Active</p>
                            <p onClick={onClickCompleted} style={{ backgroundColor: status === 'Completed' ? '#c4ebfd;' : 'white' }}>Completed</p>
                        </div>}
                </div>
                <input className={css.search} placeholder='Search...'></input>

            </div >
            <Content status={status} onClick={() => onClickOpenForm()} />

        </>
    )
}
