import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
function* fetchAllAnime(action) {
    const id = action.payload
    try {
      // Get the movies:
      const animeResponse = yield axios.get('/api/anime');
      // Set the value of the movies reducer:
      yield put({
        type: 'SET_ANIME',
        payload: animeResponse.data
      });
    } catch (error) {
      console.log('fetchAllAnime error:', error);
    }
  }

  function* fetchAnimeId(action) {
    try{
      const animeId = yield axios.get(`/api/anime/${action.payload}`);
      yield put ({type:'SET_DETAILS', payload: animeId.data});
    } catch (e) {
      console.log(e);
    }
  }

  function* addToList(action) {
    try {
        yield axios.post('api/list', action.payload);
        yield put({type:'FETCH_LIST' }) //'FETCH_LIST_ITEM'
    } 
    catch(error){
        console.log('error adding to list', error);
        alert('SOmething Went wRong');

    }
  }
  function* fetchList(action) {
    try {
      const animeList = yield axios.get('/api/list');
      // Set the value of the movies reducer:
      yield put({
        type: 'SET_LIST',
        payload: animeList.data
      });
    } catch (error) {
      console.log('fetchList error:', error);
    }
  }

  function* removeAnime(action) {
    try{
      yield axios.delete(`/api/list/${action.payload}` );
      yield put({ type:'FETCH_LIST'});
  }catch(error){
    console.log('error deleting anime from list',error);
    alert('SOmething went wrong');
  
  };
  };

function* changeStatus(action) {
    try{
         yield axios.put(`/api/list/${action.payload}`);
         yield put({ type: 'FETCH_LIST'});
    }catch(error){
        console.log('error changing status')
        alert('something went wrong changing the status');
    }
}

  function* animeSaga() {
    yield takeEvery('FETCH_ANIME', fetchAllAnime);
    yield takeEvery('FETCH_ANIME_ID', fetchAnimeId);
    yield takeEvery('ADD_LIST_ITEM', addToList);
    yield takeEvery('FETCH_LIST', fetchList);
    yield takeEvery('REMOVE_ANIME', removeAnime);
    yield takeEvery('UPDATE_STATUS', changeStatus);
  }

  export default animeSaga;