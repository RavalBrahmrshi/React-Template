import { List, Record } from 'immutable';
import * as types from '../constants/newsCardConstant';

export const NewsState = new Record({
    news: new List()
});


function newsReducer(state = new NewsState(), { payload, type }) {
    switch (type) {
        case 'Get_News_Data':
            return state.set('list', new List(payload.json));
        default:
            return state;
    }
}
export default newsReducer;