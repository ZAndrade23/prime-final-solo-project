import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllAnime(action) {
    const id = action.payload
    try {
      // Get the anime:
      const animeResponse = yield axios.get('/api/anime');
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
      const animeDBDetails = yield axios.get(`/api/anime/${action.payload}`);
      const animeXML = yield axios.get(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${action.payload}`);
      var convert= require('xml-js');
      var data= convert.xml2json(animeXML.data,{compact: true, alwaysArray: true, spaces: 0});
      var myArray = JSON.parse(data);
      var genres = ''
      var themes = ''
      var img = myArray.ann[0].anime[0].info[0].img[0]._attributes.src;
      
      for (let i = 0; i < myArray.ann[0].anime[0].info.length; i++) {
        if(myArray.ann[0].anime[0].info[i]._attributes.type == 'Plot Summary'){
         var  plotSummary = myArray.ann[0].anime[0].info[i]._text[0];
        }
        if(myArray.ann[0].anime[0].info[i]._attributes.type == 'Genres'){
           genres = genres + ' ' + myArray.ann[0].anime[0].info[i]._text[0];
        }
        if(myArray.ann[0].anime[0].info[i]._attributes.type == 'Themes')
        themes = themes + ' ' + myArray.ann[0].anime[0].info[i]._text[0];
      {
        if(myArray.ann[0].anime[0].info[i]._attributes.type == 'Number of episodes')
        var episodes =myArray.ann[0].anime[0].info[i]._text[0];
      }
      if(myArray.ann[0].anime[0].info[i]._attributes.type == 'Running time')
        var runTime =myArray.ann[0].anime[0].info[i]._text[0];
      }
      console.log(animeDBDetails.data.report_item_id);
      let animeData = {report_item_id: animeDBDetails.data.report_item_id, report_item_anime: animeDBDetails.data.report_item_anime, report_item_nb_votes: animeDBDetails.data.report_item_nb_votes, report_item_nb_seen: animeDBDetails.data.report_item_nb_seen, report_item_straight_average: animeDBDetails.data.report_item_straight_average, report_item_weighted_average: animeDBDetails.data.report_item_weighted_average ,animeRunTime: runTime, animeEpisodes:episodes, animeThemes:themes, animeGenres: genres, animePlotSummary: plotSummary, animeImage: img};
      yield put ({type:'SET_DETAILS', payload: animeData});
    } catch (e) {
      console.log(e);
    }
  }

  function* addToList(action) {
    try {
        yield axios.post('api/list', action.payload);
        yield put({type:'FETCH_LIST' }) 
    } 
    catch(error){
        console.log('error adding to list', error);
        alert('SOmething Went wRong');

    }
  }
  function* fetchList() {
    try {
      const animeList = yield axios.get('/api/list');
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