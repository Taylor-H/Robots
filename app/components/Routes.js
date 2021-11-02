import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AllProjects from './AllProjects';
import AllRobots from './AllRobots';
import CreateProject from './CreateProject';
import { fetchRobots } from '../redux/robots';
import { fetchProjects } from '../redux/projects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import { Section, Nav } from 'styled-components';

class Routes extends Component {
  componentDidMount() {
    this.props.loadProjects();
    this.props.loadRobots();
  }
  render() {
    return (
      <Router>
        <div id="main">
          <nav>
            <Link to="/">Home</Link>
            <div className="moved-over">
              <Link to="/robots">Robots</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/projects/create" component={CreateProject} />
            {/* <Route exact path="/robots/create" component={CreateRobot} /> */}
            <Route exact path="/projects" component={AllProjects} />
            <Route path="/projects/:id" component={SingleProject} />
            <Route exact path="/robots" component={AllRobots} />
            <Route path="/robots/:id" component={SingleRobot} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ robots, projects }) => ({
  robots,
  projects
});
const mapDispatchToProps = (dispatch) => ({
  loadRobots: () => dispatch(fetchRobots()),
  loadProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

