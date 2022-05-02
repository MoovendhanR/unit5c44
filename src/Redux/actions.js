// action types
export const isAuth="isAuth";
export const client="client";
// Action Creators
export const validUser=(data)=>{
    return {
        type:isAuth,
        payload:data
    }
}
export const clientDetails=(data)=>{
    return{
        type:client,
        payload:data
    }
}