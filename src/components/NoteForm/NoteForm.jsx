import React, { useState } from "react";
import Card from "./../UI/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./NoteForm.css";
const NoteForm = (props) => {
    const [inputState, setInputState] = useState({title: "", content: ""})

    const inputChangeHandler = (e) => {
        const [name, value] = [e.target.name, e.target.value];
        setInputState((prev) => {
            return({
                ...prev,
                [name] : value,
            })
        })
    }

    console.log(inputState);
    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddData(inputState);
        setInputState({title: "", content: ""});
    }

    return(
        <Card className = "notes__form">
            <form onSubmit={submitHandler}>
            <TextField
                onChange = {inputChangeHandler}
                id = "form__input--heading"
                label="Note Heading"
                type="text" 
                variant="standard"
                name="title"
                value = {inputState.title}
                fullWidth
        />
        <br/><br/>
            <TextField
            onChange = {inputChangeHandler}
            id="standard-textarea"
            label="Content"
            placeholder="Note Content"
            multiline
            fullWidth
            variant="standard"
            name = "content"
            value = {inputState.content}
            />
            <br/><br/>
            <br/>
            <Button type="submit" onClick = {submitHandler}
            variant = "contained">ADD</Button>
            </form>

        </Card>
    )
}

export default NoteForm;