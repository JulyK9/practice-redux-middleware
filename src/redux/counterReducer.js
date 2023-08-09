const INITIAL_STATE = 0;

const counterReducer = (prevState = INITIAL_STATE, action) => {
  if (action.type === 'counter/increase') {
    return prevState + 1;
  }

  return prevState;
};

export default counterReducer;
