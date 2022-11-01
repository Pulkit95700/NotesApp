import React, { useState } from 'react';
import "./Notes.css";
import Note from "./Note";
import NoteForm from '../NoteForm/NoteForm';

const data = [
    {
        id: "e1",
        title: "Carousel",
        content: "This is a css element",
    },
    {
        id: "e2",
        title: "CSS",
        content: "It stands for Cascading Style Sheet. It is used for making web pages more unique and creative."
    },
    {   
        id: "e3",
        title: "HTML",
        content: "It stands for Hyper Text Markup Language. It is used for making skeleteon of the webpage.",
    },

];

const Notes = () => {

    const [noteData, setNoteData] = useState(data);

    const noteDeleteHandler = (id) => {
        setNoteData((prev) => {
            return prev.filter(dat => {
                return dat.id != id;
            })
        })
    }
    const dataAdder = (note) =>{
        setNoteData((prev) => {
            return([
                ...prev,
                {
                    id: "e" + Math.floor(Math.random()* 10),
                    ...note
                }
            ])
        })
    }
    const NoteContent = noteData.map(note=>{
        return(
            <Note id = {note.id} key = {note.id} title = {note.title} content = {note.content} onNoteDelete = {noteDeleteHandler} />
        )
    })
    return (
        <>
        <NoteForm onAddData = {dataAdder}/>
        <div className='notes'>
            {NoteContent}
        </div>
        </>
    )
}

export default Notes