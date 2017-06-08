export default function reducer(state = {
    filters:[], 
    fetching: false, 
    fetched: false,
    error: null
    }, action) {
 
    switch (action.type) {
        // case "FETCH_FILTER": {
        //     return { ...state, fetching: true }
        // }
        case "FETCH_FILTER_REJECTED": {
            return { ...state, fetching: false, fetched: false, error: action.payload }
        }
        case "FETCH_FILTER_FULFILLED": {
            return { ...state, fetching: false, fetched: true, filters: action.payload, }
        }
        // case "FILTER_SELECTED":{
        //     //return { ...state, fetching: false, fetched: true, filter: action.payload,}
        //     return action.payload;
        // }
    }
    return state
}

// export default function () {
//     return [
//         { filter: "2016", _id: "01" },
//         { filter: "2015", _id: "02" },
//         { filter: "2014", _id: "03" },
//         { filter: "2013", _id: "04" },
//     ]
// }

