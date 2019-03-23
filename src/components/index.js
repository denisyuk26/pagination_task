//core
import React, { Component } from "react";
import { connect } from "react-redux";
//components
import { getUsers } from "../store/actions";
import UserList from "./UserList";
import Pagination from "./Pagination";
//styles
import styled from "styled-components";


//App
class App extends Component {
  state = {
    currentUsers: [],
    usersPerPage: 5,
    currentPage: 1,
    pageCount: 1
  };

  componentDidMount() {
    this.props.getUsers();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    const { users } = this.props;
    if (
      prevState.currentPage !== currentPage ||
      prevProps.users.length !== users.length
    ) {
      this.getCurrentUsers();
    }
  }
  handleCurrentPage = item =>
    this.setState({
      currentPage: item
    });

  getCurrentUsers = () => {
    const { users } = this.props;
    const { currentPage, usersPerPage } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    this.setState({
      currentUsers: [...currentUsers],
      pageCount: users.length / usersPerPage
    });
  };

  render() {
    const { pageCount, currentUsers } = this.state;
    return (
      <StyledApp>
        <Pagination
          pageCount={pageCount}
          handleCurrentPage={this.handleCurrentPage}
        />
        <UserList currentUsers={currentUsers} />
      </StyledApp>
    );
  }
}
//styles
const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

//react-redux
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
