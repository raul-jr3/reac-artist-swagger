import React, { useState, useEffect } from "react";

import * as ArtistApi from "simple_api";

const Artists = props => {
  const [artists, setArtists] = useState([]);
  const [artistInfo, setArtistInfo] = useState({});
  const [newArtist, setNewArtist] = useState("");
  const [artistToSearch, setArtistToSearch] = useState("");

  let api = new ArtistApi.DefaultApi();
  let opts = {
    limit: 56, // {Number} Limits the number of items on a page
    offset: 56 // {Number} Specifies the page number of the artists to be displayed
  };

  const handleNewArtistsAddition = () => {
    api.artistsGet(opts, artistsCallback);
  };

  const artistsCallback = (error, data, response) => {
    if (error) {
      console.log("TCL: artistsCallback -> error", error);
    } else {
      console.log("API called successfully");
      if (data) {
        setArtists(data);
        setNewArtist("");
        return;
      }

      handleNewArtistsAddition();
    }
  };

  const addArtist = () => {
    if (!newArtist) {
      alert("Please enter an artist name");
      return;
    }

    api.artistsPost({ username: newArtist }, artistsCallback);
  };

  const getArtist = () => {
    if (!artistToSearch) {
      alert("Please enter an artist name to search");
      return;
    }

    api.artistsUsernameGet(artistToSearch, (err, data, res) => {
      if (err) {
        console.log("TCL: getArtist -> err", err);
        alert(res.body.message);
      } else {
        console.log("API called successfully!");
        setArtistInfo(res.body.artist);
      }
    });
  };

  useEffect(() => {
    api.artistsGet(opts, artistsCallback);
  }, []);

  return (
    <React.Fragment>
      <p>List of artists: </p>
      <ul>
        {artists.length > 0 &&
          artists.map(artist => <li>{artist.username}</li>)}
      </ul>
      <br />
      <input
        id="artistname"
        value={newArtist}
        onChange={e => setNewArtist(e.target.value)}
        type="text"
      />
      <button onClick={addArtist}>Add Artist</button>
      <br />
      <input
        id="artistnametoretrieve"
        value={artistToSearch}
        onChange={e => setArtistToSearch(e.target.value)}
        type="text"
      />
      <button onClick={getArtist}>Get Artist</button>
      <br />
      {Object.keys(artistInfo).length > 0 && (
        <ul>
          {Object.keys(artistInfo).map(info => (
            <li>
              {info}: {artistInfo[info]}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Artists;
