export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    }
    case "GET_DENTIST":
      return { ...state, dentistas: action.payload };
    case "ADD_FAVS": {
      //para que no se guarden datos duplicados de la card verificamos que no encuenten en el array y si estan, solo devolvemos el mismo estado, si no pues pasa a actualizar favoritos con el que se obtienen desde el dispatch.
      const estaEnFavoritos = state.favoritos.some(
        (fav) => fav.id === action.payload.id
      );
      if (estaEnFavoritos) {
        //si el dentista se encuentra en favoritos al dar click en el boton se eliminara de favoritos.
        const newFav = state.favoritos.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favoritos: newFav };
      }
      const actualizarFavs = [...state.favoritos, action.payload]; //actualizo el array de favoritos con lo que tiene  y agrega el dentista que se envia desde el dispatch
      localStorage.setItem("favs", JSON.stringify(state.favoritos)); // guardamos en el LS
      return { ...state, favoritos: actualizarFavs }; //retornamos el estado completo, y la actualizacion de favoritos
    }
    default:
      return state;
  }
};
