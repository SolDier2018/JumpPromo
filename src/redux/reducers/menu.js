import {DEFAULT_STATE} from '../state';

export const menu = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case 'MENU':
          return action.menu;
      default:
          return state;
  }
};