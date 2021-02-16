const initialState = {
    fetchList: {
      recipe: [],
      isLoading: false,
      error: false
    },
    fetchRecipe: {
      recipe: null,
      isLoading: false,
      error: false
    },

    shopping: []
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case "GET-DATA":
          console.log(state.fetchList.recipe);
          return {
            ...state,
            fetchList: {
              recipe: action.posts,
              isLoading: action.load
            }
          };

        case "GET-LOAD":
          console.log(state.fetchList.recipe);
          return {
            ...state,
            fetchList: {
              isLoading: action.load
            }
          };

        case "ERROR-DATA":
          console.log("--- Triggered Form submission ---");
          console.log("Form Data - ", state.searchRecipe);
          return {
            ...state,
            fetchList: {
              isLoading: action.load,
              error: true
            }
          };
// getting recipe
        case "GET-RECIPE":
          console.log(state.fetchRecipe.recipe);
          return {
            ...state,
            fetchRecipe: {
              recipe: action.recipe.data.recipe,
              isLoading: action.load
            }
          };

        case "GET-LOADING":
          return {
            ...state,
            fetchRecipe: {
              isLoading: action.load
            }
          };

        case "GET-ERROS":
          console.log("--- Triggered Form submission ---");
          console.log("Form Data - ", state.searchRecipe);
          return {
            ...state,
            fetchRecipe: {
              isLoading: action.load,
              error: true
            }
          };

          // shopping
        case "GET-SHOPPING":  
          return {
            ...state,
            shopping: action.shopping
          };
        default:
          return state;
    }
};

export default reduser;