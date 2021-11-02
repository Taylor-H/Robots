export const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT';

export const _setSingleRobot = (robot) => ({
  type: SET_SINGLE_ROBOT,
  robot
});

export const fetchSingleRobot = (id) => {
  return async (dispatch, getState, {axios}) => {
    try {
      const { data: robot } = await axios.get(`/api/robots/${id}`);
      dispatch(_setSingleRobot(robot));
    } catch (e) {
      console.log('FETCHROBOT THUNK ERROR!!!!!', e);
    }
  };
};
const robotReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SINGLE_ROBOT:
      return action.robot;
    default:
      return state;
  }
};
export default robotReducer
