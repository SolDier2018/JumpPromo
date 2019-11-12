import {combineReducers} from 'redux';
import {menuOpen} from './menuOpen';
import {showSearch} from './showSearch';
import {openDetails} from './openDetails';

const AllReducers = combineReducers({
   menuOpen,
   showSearch,
   openDetails
});

export default AllReducers;