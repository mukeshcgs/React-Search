export function getSearchTerm() {
    return {
        type: "GET_SEARCH_TERM_FULFILLED",
        payload: {
            term:"XXXXXXXXXXXXXX",
        }
    }
}

export function setSearchTerm(term) {
    return {
        type: 'SET_SEARCH_TERM',
        payload: term,
    }
}