import {DEFAULT_STATE} from '../state';

export const pathName = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'PATH_NAME':
            return action.pathName;
        default:
            return state;
    }
};