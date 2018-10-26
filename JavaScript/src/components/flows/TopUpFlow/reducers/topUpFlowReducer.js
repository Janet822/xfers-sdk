import {
  NAVIGATE,
  SEND_HTTP_REQUEST,
  INITIALIZATION_SUCCESS,
  UPDATE_TOP_UP_DETAILS,
  SUBMIT_TOP_UP_REQUEST_RESPONSE
} from 'TopUpFlow/actions/constants'


// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [NAVIGATE]: (state, {route}) => ({ ...state, route }),
  [SEND_HTTP_REQUEST]: (state, action) => ({ ...state, dataLoading: true }),
  [INITIALIZATION_SUCCESS]: (state, {res}) => {
    const { userBanks } = res;
    return { ...state,  userBanks, dataLoading: false }
  },
  [UPDATE_TOP_UP_DETAILS]: (state, { formType, formData }) => {
    let newTopUpRequest = { ...state['newTopUpRequest'], [formType]: formData };
    return { ...state, newTopUpRequest, error: '' }
  },
  [SUBMIT_TOP_UP_REQUEST_RESPONSE]: (state, {res}) => {
    // TODO: Retrieve transfer-in information
    return { ...state }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const topUpFlowReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default topUpFlowReducer
