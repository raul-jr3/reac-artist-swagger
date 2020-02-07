import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ArtistsOpts from "./components/Artists";
// var SwaggerPetstore = require("swagger_petstore");
// var SimpleApi = require("simple_api");

function App() {
  // const [cookie, setCookie] = useState("");

  // useEffect(() => {
  // var api = new SwaggerPetstore.PetsApi();
  // var api = new SimpleApi.DefaultApi();
  // var response400 = new SimpleApi.InlineResponse400();
  // response400.message = "Something went wrong!";
  // response400.alertType = "popup";
  // Object.keys(response400);
  // var callback = function(err, data, res) {
  //   if (err) {
  //     console.log("Error", err);
  //   } else {
  //     console.log("API Called successfully!");
  //   }
  // };
  // var opts = {
  //   'limit': 56, // {Number} Limits the number of items on a page
  //   'offset': 56 // {Number} Specifies the page number of the artists to be displayed
  // };
  // api.artistsGet(opts, callback);
  // let username = "raul_jr"; // String |
  // api.artistsUsernameGet(username, (error, data, response) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log("API called successfully. Returned data: " + data);
  //   }
  // });
  // setCookie(((api.apiClient || {}).authentications || {}).cookieAuth);
  // api.artistsGet(callback);
  // }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        {Object.keys(cookie).map(cookieDetail => (
          <p key={cookieDetail} >
            {cookieDetail}: {cookie[cookieDetail]}
          </p>
        ))}
      </header> */}
      <ArtistsOpts />
    </div>
  );
}

export default App;
