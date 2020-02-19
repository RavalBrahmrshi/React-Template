import * as types from '../constants/newsCardConstant';

export const getNewsAction = news => ({
    type: types.Get_News_Data,
    payload: { news }
  });