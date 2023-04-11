import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function Teacher() {
    const [teacher, setteacher] = useState([
        { id: 1, name: 'Bharathi', age: '22', subject: 'manufacturing technology', class: 'second_year' },
        { id: 2, name: 'Raja', age: '30', subject: 'thermodynamics', class: 'third_year' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };
    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);

    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);

    };
    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);

    };

    const handleAddTodo = () => {
        const newTodo = {
            id: teacher.length + 1,
            name: inputValue,
            age: inputValue1,
            subject: inputValue2,
            class: inputValue3,
        };
        if (inputValue === '' | inputValue1 === '' | inputValue2 === '' | inputValue3 === '') {
            console.log("empty");
            setteacher([...teacher]);
        } else {
            setteacher([...teacher, newTodo]);
            setInputValue('');
            setInputValue1('');
            setInputValue2('');
            setInputValue3('');
        }

    };

    const handleDeleteTodo = (todoId) => {
        const updatedTodos = teacher.filter((todo) => todo.id !== todoId);
        setteacher(updatedTodos);
    };

    const handleEditTodo = (todoId, text, text1, text2, text3) => {
        const updatedTodos = teacher.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, name: text, age: text1, subject: text2, class: text3 };
            } else {
                return todo;
            }
        });

        setteacher(updatedTodos);
    };


    return (
        <div className='mainte'>

            <h1>Teacher List</h1>
            <div className='teacher_list1'>
                <div className='teacher_info1'>
                    <TextField label="Name" variant="filled" type="text" value={inputValue} onChange={handleInputChange} /><br></br>
                    <TextField label="Age" variant="filled" type="text" value={inputValue1} onChange={handleInputChange1} /><br></br>
                    <TextField label="Subject" variant="filled" type="text" value={inputValue2} onChange={handleInputChange2} /><br></br>
                    <TextField label="Class" variant="filled" type="text" value={inputValue3} onChange={handleInputChange3} />
                </div>
                <div className='textbutton'>
                    <Button variant="outlined" onClick={handleAddTodo}>Add teacher</Button>
                </div>
            </div>

            {teacher.map((todo) => (

                <div className='teacher_list'>
                    <div className='teacher_info'>
                        <div className='teacher_name'>
                            <lable><b>Name:</b> {todo.name}</lable>
                        </div>
                        <br></br>
                        <div>
                            <div className='lab'>
                                <lable><b>Class:</b>{todo.class}</lable>
                                <lable><b>Age:</b>{todo.age}</lable>
                                <lable><b>Subject:</b>{todo.subject}</lable>
                            </div>
                        </div>
                        <br></br>
                        <div className='teacher_sub'>
                            {/* <Button>delete</Button>
                    <Button>edit</Button> */}
                            <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                            <Button onClick={() => handleEditTodo(todo.id, prompt('Edit Name:', todo.name), prompt('Edit age:', todo.age), prompt('Edit subject:', todo.subject), prompt('Edit class:', todo.class))}>Edit</Button>
                        </div>
                    </div>
                </div>
                // <br></br>
            ))}
        </div>
    );
}