 import shifts from "../apis/shifts";
 import { CREATE_DATA, FETCH_SHIFTS } from "./types";


 export const createData = (formValues) => async (dispatch) => {
    console.log(formValues);
    const response = await shifts.post('/shifts',formValues);

    dispatch({
        type:CREATE_DATA,
        payload:response.data
    })
 }


 export const fetchShifts = () => async (dispatch) => {
    const response = await shifts.get('/shifts');
    dispatch({
       type:FETCH_SHIFTS,
       payload:response.data
   })
}