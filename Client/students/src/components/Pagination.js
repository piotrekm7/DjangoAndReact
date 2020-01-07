import React, {Component} from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

class PaginationBar extends Component {
    createPagination = () => {
        let items = [];
        for (let i = 1; i <= this.props.numberOfPages; i++) {
            items.push(
                <PaginationItem key={i} active={i === this.props.activePage}>
                    <PaginationLink onClick={() => this.props.changePage(i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return items;
    };

    render() {
        return (
            <Pagination>
                <PaginationItem disabled={this.props.activePage === 1}>
                    <PaginationLink previous onClick={() => this.props.changePage(this.props.activePage-1)}/>
                </PaginationItem>
                {this.createPagination()}
                <PaginationItem disabled={this.props.activePage === this.props.numberOfPages}>
                    <PaginationLink next onClick={() => this.props.changePage(this.props.activePage+1)}/>
                </PaginationItem>
            </Pagination>
        );
    }
}

export default PaginationBar;
