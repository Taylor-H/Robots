import axios from 'axios'
const SET_PROJECTS = 'SET_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';


const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project
  };
};

const _updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    project
  };
};

const _deleteProject = (project) => {
  return {
    type: DELETE_PROJECT,
    project
  };
};

const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects
  };
};
export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data: projects } = await axios.get('/api/projects');
      dispatch(_setProjects(projects));
    } catch (e) {
      console.log('FETCHprojects THUNK ERROR!!!!!', e);
    }
  };
};
export const createProject = (project, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/projects/', project);
    dispatch(_createProject(created));
    history.push('/');
  };
};

export const updateProject = (project, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/projects/${project.id}`, project);
    dispatch(_updateProject(updated));
    history.push('/');
  };
};

export const deleteProject = (id, history) => {
  return async (dispatch) => {
    const {data: project} = await axios.delete(`/api/projects/${id}`);
    dispatch(_deleteProject(project));
    history.push('/');
  };
};

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
      case UPDATE_PROJECT:
        return state.map((project) =>
          (project.id === action.project.id ? action.project : project)
        );
      case DELETE_PROJECT:
        return state.filter((project) => project.id !== action.project.id);
      case CREATE_PROJECT:
        return [...state, action.project];
    default:
      return state;
  }
};
export default projectsReducer;
