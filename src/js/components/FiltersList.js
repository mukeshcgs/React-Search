import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectFilter } from '../actions/filtersActions'

class FiltersList extends Component {
    createListItems() {
        if (!this.props.filters.filters.length > 0) {
            return <div class="loader"></div>
        }
        return (this.props.filters.filters.map(filter =>
            <li key={filter._id} onClick={() => this.props.selectFilter(filter)} >
                {filter.name}
            </li>)
        )
    }
    render() {
        return (<ul>{this.createListItems()}</ul>)
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);