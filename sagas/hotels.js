import { put, call, fork, take, } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../services';

var funcLoad = () => fetch("http://localhost:3000/hotels").then(res=>res.json().then( json => json));

export function* loadHotel() {
    try {
        const res = yield call(api.hotelsSources);
        yield put(actions.getHotelsSuccsess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.getHotelsFailed(e));
    }

}

export function* addHotel() {
    try {

        const res = yield call(api.addHotel);
        yield put(actions.getHotelAddSuccsess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.getHotelAddFailed());
    }

}

export function* deleteHotel() {
    try {
        console.log(setId.id)
        const res = yield call(api.deleteHotel);
        yield put(actions.deleteHotelSuccsess());
        console.log(res)
    }
    catch(e) {
        yield put(actions.deleteHotelFailed());
    }

}

export function* setHotelName() {
    try {

        const res = yield call(api.setHotelNam);
        yield put(actions.setHotelNameSuccsess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.setHotelNameFailed());
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

export function* watchSetHotelName() {
    while (true) {
      yield take("SET_HOTELS_NAME");
      yield call(setHotelName);
    }
  }

  export function* watchDeleteHotel() {
    while (true) {  
      yield take("DELETE_HOTEL");
      yield call(deleteHotel);
    }
  }




export default [
  fork(watchLoadHotel),
  fork(watchAddHotel),
  fork(watchDeleteHotel),
];