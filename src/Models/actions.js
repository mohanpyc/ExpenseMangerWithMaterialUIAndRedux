
export const addIncome = budget => {
    return {
        type:"INCOME",
        payload:budget
    }
}

export const removeIncome = budget => {
    return {
        type:"REMOVEINCOME",
        payload:budget
    }
}



export const addExpense = budget => {
    return {
        type:"EXPENSE",
        payload:budget
    }
}

export const removeExpense = budget => {
    return {
        type:"REMOVEEXPENSE",
        payload:budget
    }
}