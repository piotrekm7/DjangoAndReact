import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap"


class NewStudentForm extends React.Component {
    state = {
        name: "",
        email: "",
        document: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.student) {
            const {name, email, document, phone} = this.props.student;
            this.setState({name, email, document, phone});
        }
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    createStudent = e => {
        e.preventDefault();
        //call api
    };

    editStudent = e => {
        e.preventDefault();
        //call api
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type="text" name="name" onChange={this.onChange}
                           value={this.defaultIfEmpty(this.state.name)}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default NewStudentForm;
