import React, { Component } from "react";
import { getUsers } from "../../api";
import Error from "../Error";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
      currentResults: 5,
    };
  }
  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({ isFetching: true });
    getUsers({ page: currentPage, results: currentResults }) //звернення до стороннього ресурсу
      .then((data) => {
        this.setState({ users: data.results });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentPage !== prevState.currentPage ||
      this.state.currentResults !== prevState.currentResults
    ) {
      this.load();
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  };
  nextPage = () =>
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));

  handleChange = ({ target: { value } }) => {
    this.setState({ currentResults: value });
  }

  render() {
    const { isFetching, error, users, currentPage } = this.state;
    if (error) {
      return <Error />;
    }

    return (
      <section>
        <h2>Users:</h2>
        <select value={this.state.currentResults} onChange={this.handleChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <ul>
          {isFetching && <h2>Loading...</h2>}
          {isFetching ||
            users.map((user) => <li key={user.login.uuid}>{user.email}</li>)}
        </ul>
        <div>
          <button onClick={this.prevPage} disabled={currentPage === 1}>
            &lt; prev
          </button>
          <span>&nbsp; {currentPage} &nbsp;</span>
          <button onClick={this.nextPage}>next &gt;</button>
        </div>
      </section>
    );
  }
}

export default UsersLoader;
