import { all } from 'redux-saga/effects';
import authSagas from 'enl-redux/modules/authSagas';
import newsCardSaga from 'enl-redux/modules/newsCardSaga'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...newsCardSaga,  
  ]);
}
