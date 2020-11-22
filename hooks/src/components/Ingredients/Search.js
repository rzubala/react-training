import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/https";
import ErrorModal from '../UI/ErrorModal'

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enteredFiltered, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFiltered === inputRef.current.value) {
        const query =
          enteredFiltered.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFiltered}"`;
        sendRequest(
          "https://react-hooks-update-ca909.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFiltered, inputRef, sendRequest]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal> }
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFiltered}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
