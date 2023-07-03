

export const weatherReducer =(state, action) =>{
    switch(action.type){
        default:{
            return state;
        };
        case "SET_CITY" : {
            //console.log('rred',action.Payload)
            return {
                ...state,city:action.Payload,
            }
        };
        case "SET_CURRENT" : {
            return {
                ...state,current:action.payload,
            }
        };
        case "SET_DAILY" : {
            //console.log('reducer',action.payload)
            return {
                ...state,daily:action.payload
            }
        };
    }
}