import React, { useEffect, useState } from "react";
function Omdb() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    let mine = fetch("https://omdbapi.com/?s=superhero&apikey=e0b9ad9c");
    mine
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNews(data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (  
    <div className="lists">
      {news.map((user, index) => {
        return (
          <section className="list">
            <div className="card" style={{ width: "18rem" }}>
              <img src={user.Poster} class="card-img-top" height={"350px"} width={"100px"} />
              <div className="card-body">
                <p className="card-text">{user.Title}</p>
                <p className="card-text">{user.Year}</p>
              </div>
            </div>
            </section>
        );
      })}
    </div>
  );
}
export default Omdb;

