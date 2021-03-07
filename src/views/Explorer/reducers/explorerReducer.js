const explorerReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isOpen: true };
    case "CLOSE_SIDEBAR":
      return { ...state, isOpen: false };
    default:
      break;
  }
};

export default explorerReducer;
