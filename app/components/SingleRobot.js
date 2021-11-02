import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { RobotsProjectList } from './RobotsProjectList';
import { connect } from 'react-redux';
import { Title6, Title3, GreenButton, Button } from './styled-components';
import { fetchSingleRobot, _setSingleRobot } from '../redux/singleRobot';
import { deleteRobot, updateRobot } from '../redux/robots';

class SingleRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fuelLevel: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleRobot(id);
    console.log(id);
  }

  componentWillUnmount() {
    this.props.clearRobot();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.robot.id !== this.props.robot.id) {
      this.setState({
        name: this.props.robot.name || '',
        fuelLevel: this.props.robot.fuelLevel || '',
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateRobot({ ...this.props.robot, ...this.state });
  }

  render() {
    const { name, fuelLevel } = this.state;
    const { handleSubmit, handleChange } = this;
    const robot = this.props.robot;
    // const robot = this.props.id
    console.log('robot', robot);
    return (
      <div>
        <form id="robot-form" onSubmit={handleSubmit}>
          <label htmlFor={name}>Robot Name:{name}</label>
          <input name="name" onSubmit={handleChange} value={name} />

          <label htmlFor="fuelLevel">Fuel level:</label>
          <meter
            id="fuel"
            min="0"
            max="100"
            low="33"
            high="66"
            optimum="80"
            value={fuelLevel}
          >
            at 50/100
          </meter>
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <Button
            className="delete"
            onClick={() => this.state.deleteProject(this.props.match.params.id)}
          >
            Delete
          </Button>
        </form>
        <Title3>Projects assigned to {name}</Title3>
        <div>
        {(this.props.robot.projects.length > 0) ? this.projects.map((project) => (
        <div key={project.id}>
          <span><Title6>{project.title}</Title6></span>
          <div>{project.deadline}</div>
          <div>{project.priority}</div>
        <GreenButton>unassign</GreenButton>
        </div>
        )): <p>There are no projects for this robot</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ robot }) => ({
  robot,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateRobot: (robot) => dispatch(updateRobot(robot, history)),
  deleteRobot: (robot) => dispatch(deleteRobot(robot, history)),
  fetchSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
  clearRobot: () => dispatch(_setSingleRobot({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
