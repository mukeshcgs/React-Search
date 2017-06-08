import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {connect} from 'react-redux'

class ActiveFilterResult extends Component{
    render(){   
        return(
            <div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        filter: state.activeFilter
    }
}

export default connect(mapStateToProps)(ActiveFilterResult);
