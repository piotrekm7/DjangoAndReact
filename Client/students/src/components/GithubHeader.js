import React from "react";
import {Jumbotron, Button} from "reactstrap";

function GithubHeader() {
    return(
        <Jumbotron>
            <h1>Django And React</h1>
            <p>
                This basic web application was made for testing combination of Django and React as
                modern and simple approach for web development.
            </p>
            <Button color="success" href="https://github.com/piotrekm7/DjangoAndReact">
                Code on github >>
            </Button>
        </Jumbotron>
    )
}

export default GithubHeader;
