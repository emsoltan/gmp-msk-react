import React from "react";
import classes from "../../ui/UI.module.css";
import siteData from "../../../context/siteData";
import Card from "../../ui/Card"
import "./Library.css"
const Library = () => {
    const getAlbum = siteData[0].releases.map((album) => (
 
        <li>{album.albumName}</li>
     
    ));
console.log(getAlbum)
  // function (siteData) {
  //   for (let i = 0; i < siteData[0].releases.length; i++) {
  //      const albumTitle = siteData[0].releases.albumName;
  //      console.log(albumTitle)
  //    return <li><h3>{albumTitle}</h3></li>
  //   }
           

  // };

  // const album = siteData[1].album.tracks.map((track) =>
  //   console.log(track.trackName)
  // );
  return (
    <div className="library_view"  >
      <ul className="album_view">
      {getAlbum}
      </ul>
    </div>
  );
};

export default Library;
