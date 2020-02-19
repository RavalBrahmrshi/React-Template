import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('http://newsapi.org/v2/everything?q=apple&from=2020-02-18&to=2020-02-18&sortBy=popularity&apiKey=63c4f01a14b842d3b0a9785843dfc41f')
        .then(response => response.json());
    yield put({ json: json.articles })
    console.log("Saga" , json); 
    
}
function* actionWatcher() {
    yield takeLatest('Get_News_Data', fetchNews)
}
export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }