import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../redux/projects';
import { Link } from 'react-router-dom';
import { Wrapper, Title3, AddButton } from './styled-components';


class CreateProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.createProject(...this.state);
  }

  render() {
    const { title } = this.state;
    const { submitHandler, changeHandler } = this;

    return (
      <div>
        <form id="add-project-form" onSubmit={submitHandler}>
          <label htmlFor="title">Title: AAAAAA</label>
          <input name="title"  key="title" value={title} />
          <button onClick={changeHandler} type="submit">Submit</button>
          <Link to="/projects" >Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  createProject: (project) => dispatch(createProject(project, props.history))
});

export default connect(null, mapDispatchToProps)(CreateProject);
