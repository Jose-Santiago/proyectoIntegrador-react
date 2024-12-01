export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "GET_DENTIST":
      return { ...state, dentistas: action.payload };
    case "ADD_FAVS":
      return { ...state, favoritos: [...state.favoritos, action.payload] };
    default:
      throw new Error();
  }
};
