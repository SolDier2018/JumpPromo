import {DEFAULT_STATE} from '../state';

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
      case 'MENU_OPEN':
          return {...state};
      default:
          return state;
  }
};