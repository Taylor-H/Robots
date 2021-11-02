import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRobots } from '../redux/robots';
import { Title3, Button, AddButton, Title6 } from './styled-components';

export class AllRobots extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }
  render() {
    const robots = this.props.robots;
    return (
      <div className="robot-container">
        <div className="container row">
        <Link to="/projects/create">
          <AddButton onClick={() => this.state.createProject(this.state.title)}>Add Project</AddButton>
        </Link>
        </div>
        {
          robots.map((robot) => (
            <div key={this.id} className="robot-row">
              <div className="image-link-container">
                <Link to={`/robots/${this.id}`}>
                  <img src={robot.imageUrl} className="robot-image" />
                </Link>
              </div>
              <div className="image-link-container">
                <Link to={`/robots/${robot.id}`} key={robot.id}>
                  <Title3>{robot.name}</Title3>
                </Link>
<span><Title6>{robot.fuelType}{robot.fuelLevel}</Title6></span>
                <Button> X </Button>

              </div>
            </div>
          ))
          // <Wrapper>There are no robots registered in the database.</Wrapper>
        }
      </div>
    );
  }
}
const mapStateToProps = ({robots}) => ({
  robots
});

const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRobots);
