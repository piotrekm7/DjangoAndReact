import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap"
import axios from "axios";
import {API_URL} from "../constants";


class NewStudentForm extends React.Component {
    state = {
        id: "",
        name: "",
        email: "",
        document: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.student) {
            const {id, name, email, document, phone} = this.props.student;
            this.setState({id, name, email, document, phone});
        }
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        }).catch(this.catchError);
    };

    editStudent = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.id + '/', this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        }).catch(this.catchError);
    };

    catchError = error => {
        alert("The problem occurred with with your submission. Please check if the data provided is correct. If you need help, contact project administrator");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        console.log(error.config);
    };

    render() {
        return (
            <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type="text" name="name" onChange={this.onChange} value={this.state.name} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input type="email" name="email" onChange={this.onChange} value={this.state.email} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Document:</Label>
                    <Input type="text" name="document" onChange={this.onChange} value={this.state.document} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Phone:</Label>
                    <Input type="text" name="phone" onChange={this.onChange} value={this.state.phone} required/>
                </FormGroup>
                <Button type="submit" disabled="true">Submit</Button>
            </Form>
        );
    }
}

export default NewStudentForm;
