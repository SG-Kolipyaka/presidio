import { SELL_REQUEST, SELL_POST_SUCCESS, SELL_FAILUER,  SELL_GET_SUCCESS,
    SELL_EDIT_SUCCESS,
    SELL_DELETE_SUCCESS,COUNT ,BUY_GET_SUCCESS} from "./actionTypes";

const initialState = {
    properties: [],
  isError: false,
  isLoading: false,
  responseMessage: '' ,
  count:0,
  allproperty:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELL_REQUEST:
      return { ...state, isLoading: true };
    case SELL_POST_SUCCESS:
      return { ...state, isLoading: false, isError: false, responseMessage: payload };
    case SELL_FAILUER:
      return { ...state, isLoading: false, isError: true, responseMessage: payload };
    case SELL_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        properties: payload,
      };
      case BUY_GET_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          allproperty: payload,
        };
    case SELL_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        responseMessage: payload,
      };
    case SELL_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        properties: state.properties.filter(
          (property) => property._id !== payload
        ),
        responseMessage: "Property deleted successfully",
      };
      case COUNT:
        return { ...state, count: state.count + payload };
    default:
      return state;
  }
};
