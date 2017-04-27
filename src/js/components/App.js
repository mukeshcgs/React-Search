import React from "react"
import { connect } from "react-redux"

import SearchBar from "./SearchBar"
import Navbar from './Navbar';
import Filters from './Filters';
import AlbumList from './AlbumList';
import * as API from '../api/Api';

import { fetchUser } from "../actions/usersActions"
import { getSearchTerm } from "../actions/searchBarAction"


@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    searchTerm: store.searchterm,
  };
})

export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
    });
    console.log(this.state.albums);
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(getSearchTerm())
    this.props.dispatch(fetchUser())
  }

  getAlbums(artist) {
    API.getAlbums(artist, this.processAlbums);
    console.log("ARTIST:" + artist);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
    });

    console.log("ARTIST:" + payload);
  }

  render() {

    const { user } = this.props;
    //console.log( this.props );

    return <div class="row-fluid">
      <Navbar />
      <div class="container">
        <div className="row">
          <div className="col-md-3">
            <h1>{user.name}</h1>
            <Filters />
          </div>
          <div className="col-md-9">

            <SearchBar getAlbums={this.getAlbums} />
            <AlbumList albums={this.state.albums} />

          </div>
        </div>
      </div>
    </div>

  }
}
