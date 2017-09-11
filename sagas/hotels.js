import { put, call, fork, take, } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../services';

var funcLoad = () => fetch("http://localhost:3000/hotels").then(res=>res.json().then( json => json));
var funAdd = () => fetch("http://localhost:3000/hotels").then(res=>res.json().then( json => json));

export function* loadHotel() {
    try {

        const res = yield call(funcLoad);
        yield put(actions.getHotelsSuccsess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.getHotelsFailed());
    }

}

export function* addHotel() {
    try {

        const res = yield call(funAdd);
        yield put(actions.getHotelsSuccsess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.getHotelsFailed());
    }

}

export function* watchLoadHotel() {
  while (true) {
    yield take("GET_HOTELS");
    yield call(loadHotel);
  }
}

export function* watchAddHotel() {
  while (true) {
    yield take("ADD_HOTEL");
    yield call(addHotel);
  }
}



export default [
  fork(watchLoadHotel),
  fork(watchAddHotel)
];