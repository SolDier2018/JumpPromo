import {combineReducers} from 'redux';
import {menuOpen} from './menuOpen';
import {showSearch} from './showSearch';
import {openDetails} from './openDetails';
import {menu} from './menu';
import {pathName} from './pathName';

const AllReducers = combineReducers({
   menu,
   menuOpen,
   showSearch,
   openDetails,
   pathName
});

export default AllReducers;