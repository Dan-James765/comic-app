import "../components/Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Favourites from "./Favourites";
import Header from "./Header";

function Main() {
  //functions should do or delegate //apollo oddessy

  //UseState hooks for a spinner whilst loading the fetched data
  const [loading, setLoading] = useState(false);

  //UseState hooks for fetching the data
  const [api, setApi] = useState();

  //UseState hooks for toggling the favourites panel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // UseEffect to render in the API Data
  useEffect(() => {
    try {
      getAPIData();
    } catch (error) {
      throw new Error(error, console.log("An error occured"));
    }
  }, []);

  //Async function which calls the APIData
  const getAPIData = async () => {
    setLoading(true);
    const apiURL =
      "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";
    const fetchApiData = await axios.get(apiURL);
    console.table(fetchApiData.data.data.results);
    setApi(fetchApiData.data.data.results);
    setLoading(false);
  };

  //Variable which is appended onto the image itself
  const imageVar = "/portrait_uncanny.jpg";

  return (
    <>
      <div>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && (
          <Favourites isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="site-content">
            <ul id="comics-list" className="comics-list mb-10">
              <div className="comic-card max-w-sm ml-40">
                {api &&
                  api.map((mapper) => (
                    <>
                      <img
                        src={mapper.thumbnail.path + imageVar}
                        alt=""
                        key={Math.random()}
                      />
                      <h1 key={mapper.id}>{mapper.title}</h1>
                      <button className="button js-add">
                        Add to favourites
                      </button>
                    </>
                  ))}
              </div>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Main;
