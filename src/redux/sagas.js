import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_USER, GET_USER } from './Types'

export function* sagaWatcher(){
    yield takeEvery(REQUEST_USER, sagaWorker)
}

function* sagaWorker(){
    const payload = yield call(getGitUsers)
    yield put({ type: GET_USER, payload})
}

async function getGitUsers(){
        const response = await fetch('https://api.github.com/users?since=135')
        return await response.json()
}