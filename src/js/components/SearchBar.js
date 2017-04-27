import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
        //console.log(event.target.value);
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.getAlbums(this.state.searchTerm);
        }
    }

    render() {
        return (
            <input class="form-control" placeholder="Search" onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
        );
    }
}

SearchBar.propTypes = {
    getAlbums: PropTypes.func.isRequired,
};
