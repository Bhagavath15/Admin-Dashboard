import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function Student() {
    const [todos, setTodos] = useState([
        { id: 1, name: 'Bharathi', email: 'bharathi@gmail.com', gender: 'male' },
        { id: 2, name: 'Raja', email: 'raja@gmail.com', gender: 'male' },
        { id: 3, name: 'Sarath', email: 'sarath@gmail.com', gender: 'male' },
        { id: 4, name: 'Kumar', email: 'kumar@gmail.com', gender: 'male' },
        { id: 5, name: 'Fathima', email: 'fathima@gmail.com', gender: 'female' },
        { id: 6, name: 'Thara', email: 'thara@gmail.com', gender: 'female' },
        { id: 7, name: 'maya', email: 'maya@gmail.com', gender: 'female' }
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
            name: inputValue,
            email: inputValue1,
            gender: inputValue2,
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
                return { ...todo, name: text, email: text1, gender: text2 };
            } else {
                return todo;
            }
        });

        setTodos(updatedTodos);
    };

    return (
        <div className='main_st_container'>
            <h1>Students List</h1>
            <div className='student_list1'>
                <div className='student_info1'>
                    <TextField label="Name" variant="filled" type="text" value={inputValue} onChange={handleInputChange} />
                    <TextField label="Email" variant="filled" type="text" value={inputValue1} onChange={handleInputChange1} />
                    <TextField label="Gender" variant="filled" type="text" value={inputValue2} onChange={handleInputChange2} />
                </div>
                <div>
                    <Button onClick={handleAddTodo}>Add Student</Button>
                </div>
            </div>

            <ol>

                {todos.map((todo) => (

                    <li key={todo.id}>
                        <div className='student_list'>
                            <div className='student_info'>
                                <lable> {todo.name}</lable>
                                <lable>{todo.email}</lable>
                                <lable>{todo.gender}</lable>
                            </div>
                            <div>
                                <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                                <Button onClick={() => handleEditTodo(todo.id, prompt('Edit Name:', todo.name), prompt('Edit email:', todo.email), prompt('Edit gender:', todo.gender))}>Edit</Button>
                            </div>
                        </div>
                    </li>

                ))}

            </ol>


        </div>
    );
}