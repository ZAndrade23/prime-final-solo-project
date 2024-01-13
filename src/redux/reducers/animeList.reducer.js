const list = (state = [], action) => {
    if(action.type === 'ADD_TO_LIST'){
        return[...state, action.payload];
    }//  else if (action.type === 'CLEAR_CART') {
    //     return [];
    // }
    return state;
    // switch (action.type){
    //     case 'ADD_TO_LIST':
    //       return action.payload;
    //     default:
    //       return state;
    //   }
    
};

export default list;