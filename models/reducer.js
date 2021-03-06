const defaultState = {
  message: 'loading...',
  movieList: [],
  loaded: false,
  page_limit: 12,
  page_start: 0
};
export const listReducer = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'setMovieList':
      const { movieList } = payload;
      return { ...state, movieList };
    case 'setLoaded':
      const { loaded } = payload;
      return { ...state, loaded };
    case 'setPage_limit':
      const { page_limit } = payload;
      return { ...state, page_limit };
    case 'setPage_start':
      const { page_start } = payload;
      return { ...state, page_start };
    default: return state;
  }
};