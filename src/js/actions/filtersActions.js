import axios from "axios";

export const selectFilter = (filter) => {
  console.log("Clicked", filter)
  return {
    type: "FILTER_SELECTED",
    payload: filter
  }
}

export function fetchFilters() {
  return function (dispatch) {
    //axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5964d3f0d29c4469a8fac5cf9767b2b4")
      axios.get("http://localhost:8080/api/users")
      .then((response) => {
        dispatch({ type: "FETCH_FILTER_FULFILLED", payload: response.data.docs })
        console.log(response.data.docs)
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FILTERS_REJECTED", payload: err })
        console.log(err)
      })
  }
}
