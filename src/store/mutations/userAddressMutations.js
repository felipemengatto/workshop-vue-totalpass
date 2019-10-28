import * as types from './mutationTypes';

export default {
    [types.SET_ADDRESS]: (state, data) => {
        state.user.address = {
            ...state.address,
            ...data
        }
    }
}