import React, {Component, Fragment} from "react";
import {Modal, ModalHeader, Button, ModalFooter} from "reactstrap";
import axios from "axios";
import {API_URL} from "../constants";


class ConfirmRemovalModal extends Component{
    state={
        modal: false
    };

    toggle = () =>{
        this.setState(previous =>({
            modal: !previous.modal
        }));
    };

    deleteStudent = id => {
        axios.delete(API_URL + id + '/').then(() => {
            this.props.resetState();
            this.toggle();
        });
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>
                    Remove
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>Do you really want to delete the student?</ModalHeader>
                    <ModalFooter>
                        <Button onClick={() => this.toggle()}>Cancel</Button>
                        <Button disabled="true" color="danger" onClick={() => this.deleteStudent(this.props.id)}>Yes</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    };
}

export default ConfirmRemovalModal;
