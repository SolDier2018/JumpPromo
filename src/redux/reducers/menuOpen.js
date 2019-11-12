import {DEFAULT_STATE} from '../state';

export const menuOpen = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'MENU_OPEN':
            return action.menuOpen;
        default:
            return state;
    }
};