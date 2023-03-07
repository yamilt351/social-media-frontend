import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { URL } from "../../urlStore";
import { useLocation } from "react-router-dom";
import Card from "../Card/card";

/* eslint-disable react/prop-types */ // TODO:
function Search() {
  const [article, setArticle] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    if (query) {
      try {
        const fetchData = async () => {
          const search = await axios.get(`${URL}posts/search${query}`);
          console.log(search);
          setArticle(search.data);
        };
        fetchData();
      } catch (error) {
        console.error(error.message);
      }
    }
  }, [query]);

  console.log(article);

  return (
    <>
      <h1 className="Page-indicator">Results:</h1>
      {article.length == 0 ? (
        <Loading />
      ) : (
        <div className="section-card-container">
          {article.map((post) => {
            const { description, userId, like, title, createdAt, tags } = post;

            return (
              <div className="card" key={post._id}>
                <Card
                  title={title}
                  description={description}
                  id={post._id}
                  userId={userId}
                  like={like}
                  createdAt={createdAt}
                  tags={tags}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Search;
