export const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';

export const _setSingleProject = (project) => ({
  type: SET_SINGLE_PROJECT,
  project
});

export const fetchSingleProject = (id) => {
  return async (dispatch, getState, {axios}) => {
    try {
      const { data: project } = await axios.get(`/api/projects/${id}`);
      dispatch(_setSingleProject(project));
    } catch (e) {
      console.log('FETCHPROJECT THUNK ERROR!!!!!', e);
    }
  };
};
const projectReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SINGLE_PROJECT:
      return action.project;
    default:
      return state;
  }
};
export default projectReducer
