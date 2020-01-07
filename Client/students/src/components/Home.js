import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap"
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";
import axios from "axios"
import {API_URL} from "../constants";
import PaginationBar from "./Pagination";
import GithubHeader from "./GithubHeader";

class Home extends Component {
    state = {
        students: [],
        pages: 0,
        activePage: 1,
    };

    componentDidMount() {
        this.resetState();
    }

    getStudents = (page = 1) => {
        axios.get(API_URL + '?page=' + page).then(res => {
            this.setState({students: res.data.results});
            this.setState({pages: res.data.total_pages})
        }).catch((error) => {
            alert("There is the problem with connecting to the server, please contact with project administrator.");
            console.log(error.config);
        });
    };

    resetState = () => {
        this.getStudents();
    };

    changePage = (page) => {
        this.setState({activePage: page});
        this.getStudents(page);
    };

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <GithubHeader/>
                <Container style={{marginTop: "20px"}}>
                    <Row>
                        <Col>
                            <StudentList students={this.state.students} resetState={this.resetState}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewStudentModal create={true} resetState={this.resetState}/>
                        </Col>
                    </Row>
                    <PaginationBar numberOfPages={this.state.pages} activePage={this.state.activePage}
                                   changePage={this.changePage}/>
                </Container>
            </Container>
        );
    }
}

export default Home;
