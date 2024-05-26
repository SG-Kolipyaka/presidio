import { SELL_REQUEST, SELL_POST_SUCCESS, SELL_FAILUER ,  SELL_GET_SUCCESS,
    SELL_EDIT_SUCCESS,
    SELL_DELETE_SUCCESS,COUNT,BUY_GET_SUCCESS} from "./actionTypes";
import axios from "axios";

export const addhouse = (userData) => (dispatch) => {
  dispatch({ type: SELL_REQUEST });
  const token = localStorage.getItem('token');
  const config = {
    headers: {
        Authorization:`${token}`
    }
  };
  return axios.post("http://localhost:8080/api/property/add", userData, config)
  .then((res) => { 
    dispatch({ type: SELL_POST_SUCCESS, payload: res.data.message }); 
  })
  .catch((error) => {
    console.error("Error adding house:", error.response);
    dispatch({ type: SELL_FAILUER, payload: error.message });
  });
};




export const getProperties = (dispatch) => {
    dispatch({ type: SELL_REQUEST });
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      return axios.get("http://localhost:8080/api/property/posts", config).then((res)=>{
        dispatch({ type: SELL_GET_SUCCESS, payload: res.data });
      })
      
    } catch (error) {
      console.error("Error fetching properties:", error.response);
      dispatch({ type: SELL_FAILUER, payload: error.message });
    }
  };


  
  // Action creators for editing property
  export const editProperty = (propertyData,id) => async (dispatch) => {
    dispatch({ type: SELL_REQUEST });
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
       return  axios.patch(`http://localhost:8080/api/property/update/${id}`, propertyData, config).then((res)=>{
        dispatch({ type: SELL_EDIT_SUCCESS, payload: res.data.msg });
       })
      
    } catch (error) {
      console.error("Error editing property:", error.response);
      dispatch({ type: SELL_FAILUER, payload: error.message });
    }
  };
  

  export const deleteProperty = (propertyId) => async (dispatch) => {
    dispatch({ type: SELL_REQUEST });
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      await axios.delete(`http://localhost:8080/api/property/delete/${propertyId}`, config);
      dispatch({ type: SELL_DELETE_SUCCESS, payload: propertyId });
    } catch (error) {
      console.error("Error deleting property:", error.response);
      dispatch({ type: SELL_FAILUER, payload: error.message });
    }
  };


  export const counts = () => {
    return {
      type: COUNT,
      payload: 1
    };
  };
  




  export const getAllProperties = (filters = {}) => (dispatch) => {
    dispatch({ type: SELL_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `${token}`
      },
      params: filters
    };
    
    return axios.get("http://localhost:8080/api/property/allposts", config)
      .then((res) => { 
        dispatch({ type: BUY_GET_SUCCESS, payload: res.data }); 
      })
      .catch((error) => {
        console.error("Error fetching properties:", error.response);
        dispatch({ type: SELL_FAILUER, payload: error.message });
      });
  };


  export const editlikesProperty = (id) => async (dispatch) => {
    dispatch({ type: SELL_REQUEST });
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
       return  axios.patch(`http://localhost:8080/api/property/updatelike/${id}`, config).then((res)=>{
        dispatch({ type: SELL_EDIT_SUCCESS, payload: res.data.msg });
       })
      
    } catch (error) {
      console.error("Error editing property:", error.response);
      dispatch({ type: SELL_FAILUER, payload: error.message });
    }
  };



