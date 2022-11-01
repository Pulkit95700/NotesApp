import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Card from "./Card";
import "./MyModal.css";
const MyModal = (props) => {


    return(
        <Modal 
        open = {props.open}
        onClose = {props.onClose}>
        <Card className = {`modal__box ${props.className}`} style = {props.style}>
            {props.children}
        </Card>
        </Modal>
    )
}

export default MyModal;