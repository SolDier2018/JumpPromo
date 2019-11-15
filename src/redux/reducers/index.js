import {combineReducers} from 'redux';
import {menuOpen} from './menuOpen';
import {showSearch} from './showSearch';
import {openDetails} from './openDetails';
import {menu} from './menu';

const AllReducers = combineReducers({
   menu,
   menuOpen,
   showSearch,
   openDetails
});

export default AllReducers;