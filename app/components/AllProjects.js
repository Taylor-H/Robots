import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchProjects } from '../redux/projects';
import { CreateProject } from './CreateProject';
import { fetchSingleProject } from '../redux/singleProject';
import { Link } from 'react-router-dom';
import { Title3, DeleteButton, AddButton } from './styled-components';



export class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProject({ ...this.state });
  }
componentDidMount() {
    // this.props.fetchSingleProject();
    this.props.fetchProjects();
  }
  render() {
    const projects = this.props.projects;

    // console.log('What is this.state?', this.state);
    return (
      <div>
        {/* <Link to="/projects/create"><AddButton onClick={() => this.state.createProject(this.state.title)}>Add Project</AddButton></Link> */}
        <CreateProject />
        <div  className="container-row project-list">
        {projects.map((project) => (
          <div key={project.id}>
            <span className="description">{project.description}</span>
            <Link to={`/projects/${project.id}`}>
              <Title3>{project.title}</Title3>
              <span>{project.deadline}</span>
              <h6>
                Status:
                {project.completed ? <p>Complete</p> : <p>Not done.</p>}
              </h6>
              <form onSubmit={this.handleSubmit}>
              <DeleteButton className="delete orange" onClick={() => project.props.deleteProject(this.props.match.params.id)}>X</DeleteButton>
              </form>
            </Link>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: () => dispatch(deleteProject())
  // fetchSingleProject: () => dispatch(fetchSingleProject(project.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);
