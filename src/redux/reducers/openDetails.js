import {DEFAULT_STATE} from '../state';

export const openDetails = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'OPEN_DETAILS':
            return action.openDetails;
        default:
            return state;
    }
};