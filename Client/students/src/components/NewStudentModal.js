import React, {Component, Fragment} from "react";
import {Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import NewStudentForm from "./NewStudentForm";


class NewStudentModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;
        let title, buttonText, button_color;
        if (create) {
            title = "Creating New Student";
            buttonText = "Create New";
            button_color = "primary";
        } else {
            title = "Editing Student";
            buttonText = "Edit";
            button_color = "secondary";
        }

        const button = (
            <Button color={button_color} className="float-right" onClick={this.toggle}>{buttonText}</Button>);

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewStudentForm resetState={this.props.resetState} student={this.props.student}
                                        toggle={this.toggle}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );

    };
}

export default NewStudentModal;
