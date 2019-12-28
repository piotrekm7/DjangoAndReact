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
        let title, buttonText;
        if (create) {
            title = "Creating New Student";
            buttonText = "Edit";
        } else {
            title = "Editing Student";
            buttonText = "Create New";
        }

        const button = (<Button color="primary" className="float-right" onClick={this.toggle}
                                style={{minWidth: "200px"}}>{buttonText}</Button>);

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewStudentForm resetState={this.props.resetState} toggle={this.toggle}
                                        student={this.props.student}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );

    };
}

export default NewStudentModal;
