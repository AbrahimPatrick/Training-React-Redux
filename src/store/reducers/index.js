import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
  course,
});

/* Formato que fica para a chamada nos componentes após o combine
{ 
  course: {
    modules: [], activeLesson: {}, activeModule: {}
  },
  user: {
    name: '', avatar: '',
  }
}
*/