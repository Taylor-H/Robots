import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AllProjects } from './AllProjects';
import { connect } from 'react-redux';
import { Wrapper, Title3, GreenButton } from './styled-components';
import { deleteProject, updateProject } from '../redux/projects';
import { fetchSingleProject, _setSingleProject } from '../redux/singleProject';

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: '',
      robots: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
 this.props.fetchSingleProject(id);
 console.log(id)
  }

  componentWillUnmount() {
    this.props.clearProject();
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.robot.id !== this.props.robot.id) {
  //     this.setState({
  //       robot: this.props.project.name || '',
  //       projects: this.props.project.robots || '',
  //     });
  //   }
  // }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProject({ ...this.props.project, ...this.state });
  }

  render() {
    const { project, robots} = this.state;
    const { handleSubmit, handleChange } = this;

console.log(this.props.project)
    return (
      <div key={project.id}>
        <div className="project-container">
          <Wrapper>
            <p>{project.description}</p>
            <span>
              <Title3>{project.title}</Title3>
            </span>
              <div>{project.deadline}</div>
             <div>{project.priority}</div>
          </Wrapper>
        </div>
        {/* <form id="project-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input name="title" onChange={handleChange} value={project} />

          <label htmlFor="projects">Projects:</label>
          <input name="projects" onChange={handleChange} value={robots} />

          <button type="submit">Submit</button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <GreenButton
            className="remove"
            onClick={() => this.props.deleteProject(this.props.match.params.id)}
          >
            Delete
          </GreenButton>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = ({ project }) => ({
  project,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateProject: (project) => dispatch(updateProject(project, history)),
  deleteProject: (project) => dispatch(deleteProject(project, history)),
  fetchSingleProject: (id) => dispatch(fetchSingleProject(id)),
  clearProject: () => dispatch(_setSingleProject({})),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
