import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducer'
import bodyReducer from './body_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: bodyReducer
})

export default rootReducer;
