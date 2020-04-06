export const updateObject =(prevValue, newValue)=>{
    return{
        ...prevValue,
        ...newValue
    }
}