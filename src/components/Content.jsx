import css from './content.module.css'
import { ListTodos } from './ListTodos';
import Form from './Form';
import { useState } from 'react';

export default function Content({ status }) {
    const [activeTodo, setActiveTodo] = useState(null);

    return (
        <>
            {activeTodo &&
                < Form todo={activeTodo} close={() => { setActiveTodo(null); document.body.style.overflow = 'auto' }} />
            }
            <table className={css.title}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><img src='img.icons8.png' alt='#'></img></th>
                        <th> Title</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    status === 'All' &&
                    ListTodos.map(todo =>
                        <tbody key={todo.id}>
                            < tr style={{ color: todo.completed ? 'green' : 'red' }}>
                                <td><span>{todo.id}</span></td>
                                <td>{todo.completed && <img src='img.icons8.png' alt='#'></img>}</td>
                                <td>{todo.title}</td>
                                <td><button onClick={() => { setActiveTodo(todo); document.body.style.overflow = 'hidden' }}> <img src="eye.png" alt="#" /></button></td>
                            </tr>
                        </tbody>
                    )
                }
                {
                    status === 'Active' &&
                    ListTodos.map(todo =>
                        <tbody key={todo.id}>
                            <tr style={{ display: !todo.completed ? '' : 'none', color: 'red' }}>
                                <td><span>{todo.id}</span></td>
                                <td></td>
                                <td>{todo.title}</td>
                                <td><button onClick={() => setActiveTodo(todo)}> <img src="eye.png" alt="#" /></button></td>
                            </tr >
                        </tbody>
                    )
                }
                {
                    status === 'Completed' &&
                    ListTodos.map(todo =>
                        <tbody key={todo.id}>
                            <tr style={{ display: todo.completed ? '' : 'none', color: 'green' }}>
                                <td><span>{todo.id}</span></td>
                                <td>{<img src='img.icons8.png' alt='#'></img>}</td>
                                <td> {todo.title}</td>
                                <td><button onClick={() => setActiveTodo(todo)}> <img src="eye.png" alt="#" /></button></td>
                            </tr>
                        </tbody>
                    )
                }

            </table >
        </>
    )
};

