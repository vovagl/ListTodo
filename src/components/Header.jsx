import css from './header.module.css';
import { useState } from 'react';
import Content from './Content';

export default function Header() {
    const [choice, setChoice] = useState(false);
    const [status, setStatus] = useState('All');

    const onClick = (status) => {
        setStatus(status)
        setChoice(!choice)
    }

    const onClickChoose = () => {

        setChoice(!choice)
    }


    return (
        <>
            <h1>Todos:</h1>
            <div className={css.input}>
                <div className={css.block}>
                    <input className={css.all} placeholder={status} onClick={onClickChoose}></input>
                    {choice &&
                        < div className={css.color}>
                            <p onClick={() => onClick('All')} className={status === 'All' ? css.p : css.white} >All</p>
                            <p onClick={() => onClick('Active')} className={status === 'Active' ? css.p : css.white}>Active</p>
                            <p onClick={() => onClick('Completed')} className={status === 'Completed' ? css.p : css.white}>Completed</p>
                        </div>}
                </div>
                <input className={css.search} placeholder='Search...'></input>
            </div >
            <Content status={status} />
        </>
    )
}
