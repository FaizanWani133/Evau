export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";




export const getLoading=()=>{
    return{
        type:LOADING
    }
}
export const getSuccess=()=>{

    return{

        type:SUCCESS
    }
}
export const getError=()=>{
    return{
        type:ERROR
    }
}



