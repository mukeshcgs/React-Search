export default function reducer(state = {
    searchTerm: { term: '' },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "GET_SEARCH_TERM": {
            return { ...state, fetching: true }
        }
        case "GET_SEARCH_TERM_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "GET_SEARCH_TERM_FULFILLED": {
            return { ...state, fetching: false, fetched: true, term: action.payload, }
        }
        case "SET_SEARCH_TERM": {
            return {
                ...state, searchTerm: { ...state.searchTerm, term: action.payload },
            }
        }
    }
}

