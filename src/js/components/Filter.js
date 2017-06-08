import React, { Component, PropTypes } from 'react';
import FiltersList from './FiltersList'

class Filter extends Component{
    render(){
        return(
            <div>
                <FiltersList/>
            </div>
        )
    }
}

// Filter.propTypes = {
//     filter: React.PropTypes.object.isRequired,
// };

export default Filter;