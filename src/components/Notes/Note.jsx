import React, { useState } from "react";
import Card from "../UI/Card";
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MyModal from "../UI/MyModal";
import "./Note.css";

const Note = (props)=>{
    const [modalOpenState, setModalOpenState] = useState(false);

    const modalHandler = ()=>{
        setModalOpenState((prev) => !prev);
    }

    const noteDeleteHandler = () => {
        props.onNoteDelete(props.id);
    }

    return(
        <Card className="notes__note">
            <div className="note__header">
            <Typography variant="h5" gutterBottom>
                {props.title}   
            </Typography>
            </div>
            <div className="note__body">
            <Typography variant="body1" gutterBottom>
                {props.content} 
            </Typography>
            </div>
            <div className="note__footer">
                <Button onClick = {modalHandler} variant="contained" style={{backgroundColor: "red"}}>
                    <DeleteOutlineIcon/>
                </Button>
                <MyModal className = "note__modal" open = {modalOpenState} onClose = {modalHandler}>
                    <div className="note__delete">
                        <Typography variant="h5" gutterBottom>
                            Are you sure you want to Delete this note?
                        </Typography>
                        <div className="note__delete--confirm">
                            <Button onClick={noteDeleteHandler} variant="contained" style={{backgroundColor: "red"}}>
                                <CheckIcon/>
                            </Button>
                            <Button onClick={modalHandler} variant="contained" style={{backgroundColor: "green"}}>
                                <CloseIcon/>
                            </Button>
                        </div>
                    </div>
                </MyModal>
            </div>

        </Card>
    )
}


export default Note;

//strategy
// Home
//     Nav
//     Notes
//         NoteInputForm
//         Note 
