const initialState = { 
  counter: 1
 };
 
function reducer(state=initialstate, action) {
  switch (action.type){
    case INCREMENT:
      return {
        counter: state.counter +1
        };
    default:
      return state;
     }
  }

/* p416 reducer
변화 일으키는 함수, 현재 상태 & 전달받은 액션 객체 params : create new state */ 
