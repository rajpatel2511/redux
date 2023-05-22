const initialState ={
    listValue:[],
}


export const todoReducer = (state = initialState,action)=>{

    const {payload} = action;
    switch(action.type){
        case "GETINPUTVALUE":
            return Object.assign(
                {},{
                    ...state,
                    listValue:[...state.listValue,payload],
                    
                    
                }
            );
            
            default:
                return state;
    }
    };
    
