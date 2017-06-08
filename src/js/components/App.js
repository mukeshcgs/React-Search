import React from "react"
import { connect } from "react-redux"

import SearchBar from "./SearchBar"
import Navbar from './Navbar';
import Filter from './Filter';
import AlbumList from './AlbumList';
import * as API from '../api/Api';

import { fetchUser } from "../actions/usersActions"
import { fetchFilters } from "../actions/filtersActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    filters: store.filters.filter,
  };
})

export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(fetchFilters())
  }

  getAlbums(searchQuery) {
    API.getAlbums(searchQuery, this.processAlbums);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload,
    });
  }

  render() {
    const { user, filters } = this.props;
    return <div class="row-fluid">
      <Navbar />
      <div class="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3">
            <Filter />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-9">
            <h1 class="u-name">{user.name}</h1>
            
            <SearchBar getAlbums={this.getAlbums} />
            <AlbumList albums={this.state.albums} />

          </div>
        </div>
      </div>
    </div>

  }
}
