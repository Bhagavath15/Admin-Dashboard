import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function LibraryManagement() {
    const [todos, setTodos] = useState([
        { id: 1, bookname: 'Treasure Island', author: 'Robert Louis Stevenson', typeofbook: 'Adventure' },
        { id: 2, bookname: 'King Solomon Mines', author: 'H.Rider Haggard', typeofbook: 'Adventure' },
        { id: 3, bookname: 'Amazing Spider-Man', author: 'J.Michel Strazynski', typeofbook: 'Comic' }

    ]);

    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };
    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);

    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);

    };

    const handleAddTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            bookname: inputValue,
            author: inputValue1,
            typeofbook: inputValue2,
        };
        if (inputValue === '' | inputValue1 === '' | inputValue2 === '') {
            console.log("empty");
            setTodos([...todos]);
        } else {
            setTodos([...todos, newTodo]);
            setInputValue('');
            setInputValue1('');
            setInputValue2('');

        }
    };

    const handleDeleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (todoId, text, text1, text2) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, bookname: text, author: text1, typeofbook: text2 };
            } else {
                return todo;
            }
        });

        setTodos(updatedTodos);
    };

    return (
        <div className='main_st_container'>
            <h1>Book Lists</h1>
            <div className='student_list1'>
                <div className='student_info1'>
                    <TextField label="Book Name" variant="filled" type="text" value={inputValue} onChange={handleInputChange} />
                    <TextField label="Author" variant="filled" type="text" value={inputValue1} onChange={handleInputChange1} />
                    <TextField label="Type of Book" variant="filled" type="text" value={inputValue2} onChange={handleInputChange2} />
                </div>
                <div>
                    <Button onClick={handleAddTodo}>Add Book</Button>
                </div>
            </div>

            <ol>

                {todos.map((todo) => (

                    <li key={todo.id}>
                        <div className='student_list'>
                            <div className='student_info'>
                                <lable> {todo.bookname}</lable>
                                <lable>{todo.author}</lable>
                                <lable>{todo.typeofbook}</lable>
                            </div>
                            <div>
                                <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                                <Button onClick={() => handleEditTodo(todo.id, prompt('Edit Book Name:', todo.bookname), prompt('Edit Author:', todo.author), prompt('Edit Type of Book:', todo.typeofbook))}>Edit</Button>
                            </div>
                        </div>
                    </li>

                ))}

            </ol>


        </div>
    );
}
