import {DEFAULT_STATE} from '../state';

export const showSearch = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SHOW_SEARCH':
            return action.showSearch;
        default:
            return state;
    }
};