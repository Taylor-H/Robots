
const SET_ROBOTS = 'SET_ROBOTS';
const CREATE_ROBOT = 'CREATE_ROBOT';
const DELETE_ROBOT = 'DELETE_ROBOT';
const UPDATE_ROBOT = 'UPDATE_ROBOT';

const _setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});
const _createRobot = (robot) => {
  return {
    type: CREATE_ROBOT,
    robot,
  };
};

const _updateRobot = (robot) => {
  return {
    type: UPDATE_ROBOT,
    robot,
  };
};

const _deleteRobot = (robot) => {
  return {
    type: DELETE_ROBOT,
    robot,
  };
};

export const fetchRobots = () => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data: robots } = await axios.get('/api/robots');
      dispatch(_setRobots(robots));
    } catch (e) {
      console.log('FETCHROBOTS THUNK ERROR!!!!!', e);
    }
  };
};
// THUNK CREATORS

export const createRobot = (robot, history) => {
  return async (dispatch, { axios }) => {
    const { data: created } = await axios.post('/api/robots', robot);
    dispatch(_createRobot(created));
    history.push('/');
  };
};

export const updateRobot = (robot, history) => {
  return async (dispatch, { axios }) => {
    const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot);
    dispatch(_updateRobot(updated));
    history.push('/');
  };
};

export const deleteRobot = (id, history) => {
  return async (dispatch, { axios }) => {
    const { data: robot } = await axios.delete(`/api/robots/${id}`);
    dispatch(_deleteRobot(robot));
    history.push('/');
  };
};

const robotsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    case UPDATE_ROBOT:
      return state.map((robot) =>
        (robot.id === action.robot.id ? action.robot : robot)
      );
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.robot.id);
    case CREATE_ROBOT:
      return [...state, action.robot];
    default:
      return state;
  }
};

export default robotsReducer;
