
const initialState={
    income:[],
    expenses:[],
    
}

const reducers = (state=initialState,action) => {
    if(action.type==="INCOME"){
        return {
            income:[...state.income,action.payload],
            expenses:[...state.expenses]
        }
    }
    if(action.type==="EXPENSE"){
        return {
            income:[...state.income],
            expenses:[...state.expenses,action.payload]
        }
    }
    if(action.type==="REMOVEINCOME"){
        return {
            income:state.income.filter(i=>i.reason!==action.payload.reason),
            expenses:[...state.expenses]
        }
    }
    if(action.type==="REMOVEEXPENSE"){
        return {
            income:[...state.income],
            expenses:state.expenses.filter(i=>i.reason!==action.payload.reason)
        }
    }
    return state

}

export default reducers