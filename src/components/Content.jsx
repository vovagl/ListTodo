import css from './content.module.css'
import { ListTodos } from './ListTodos';
//import Form from './Form';



export default function Content({ status, onClick }) {


    return (
        <>

            <table className={css.title}>
                <tr>
                    <th>#</th>
                    <th><img src='img.icons8.png' alt='#'></img></th>
                    <th> Title</th>
                    <th></th>
                </tr>

                {
                    status === 'All' &&
                    ListTodos.map(todo =>
                        < tr key={todo.id} style={{ color: todo.completed ? 'green' : 'red' }}>
                            <td><span>{todo.id}</span></td>
                            <td>{todo.completed && <img src='img.icons8.png' alt='#'></img>}</td>
                            <td>{todo.title}</td>
                            <td><button onClick={() => onClick(todo.id)}> <img src="eye.png" alt="#" /></button></td>
                        </tr>

                    )
                }


                {
                    status === 'Active' &&
                    ListTodos.map(todo =>
                        <tr key={todo.id} style={{ display: !todo.completed ? '' : 'none', color: 'red' }}>
                            <td><span>{todo.id}</span></td>
                            <td></td>
                            <td>{todo.title}</td>
                            <td><button onClick={() => onClick(todo.id)}> <img src="eye.png" alt="#" /></button></td>
                        </tr>
                    )
                }
                {
                    status === 'Completed' &&
                    ListTodos.map(todo =>
                        <tr key={todo.id} style={{ display: todo.completed ? '' : 'none', color: 'green' }}>
                            <td><span>{todo.id}</span></td>
                            <td>{<img src='img.icons8.png' alt='#'></img>}</td>
                            <td> {todo.title}</td>
                            <td><button onClick={() => onClick(todo.id)}> <img src="eye.png" alt="#" /></button></td>
                        </tr>
                    )
                }

            </table >
        </>
    )
};

