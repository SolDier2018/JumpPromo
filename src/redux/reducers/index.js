import {combineReducers} from 'redux';
import menuOpen from './reducer';

const AllReducers = combineReducers({
   menuOpen: menuOpen
});

export default AllReducers;