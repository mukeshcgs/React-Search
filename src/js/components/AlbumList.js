import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

//We define a function called AlbumList which takes a props argument.
const AlbumList = (props) => {
    console.log("ALBUM LIST:" + props.albums);
    //props will have an albums property which holds the array of albums we want to render. We map over the albums, creating an array of <li> elements, with each holding an album name.
    const albums = props.albums.map((album) => <div className="well well-sm" key={album._id}>{album.headline.main}</div>);

    // We return a <ul> element, with our list of album names inside.
    return (<div>{albums}</div>);

};
/**
  This is our first encounter with propTypes. In development mode, React checks the props that are passed into a component. For each props property, React attempts to look it up in the component’s propTypes object to ensure that (a) the prop is expected and (b) the prop is of the correct type. In this case, we’re specifying that the AlbumList component is expecting a props property called albums, that it’s an array, and that it’s required.
 */
AlbumList.propTypes = {
    albums: PropTypes.array.isRequired,
}

export default AlbumList;