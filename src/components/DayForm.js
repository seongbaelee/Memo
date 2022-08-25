import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import Word from "./Word";
import { Link } from "react-router-dom";

export default function DayForm() {
  const day = Number(useParams().day);
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("localStorage_words")) || []
  );

  useEffect(() => {
    localStorage.setItem("localStorage_words", JSON.stringify(words));
  }, [words]);

  const korref = useRef();
  const engref = useRef();

  function handdleSubmit(e) {
    //e.preventDefault();

    setWords((words) => [
      ...words,
      {
        uniqueId: nanoid(),
        day: day,
        kor: korref.current.value,
        eng: engref.current.value,
        isDone: false,
        isShown: false,
      },
    ]);
  }

  function toggleCheck(id) {
    setWords((words) =>
      words.map((word) =>
        word.uniqueId === id ? { ...word, isDone: !word.isDone } : { ...word }
      )
    );
  }

  function toggleShow(id) {
    setWords((words) =>
      words.map((word) =>
        word.uniqueId === id ? { ...word, isShown: !word.isShown } : { ...word }
      )
    );
  }

  function deleteWord(id) {
    setWords((words) => words.filter((word) => word.uniqueId !== id));
  }

  const wordsByDay = words.filter(
    (word) => word.day === day && word.kor && word.eng
  );

  const wordList = wordsByDay.map((word) => (
    <Word
      key={word.uniqueId}
      word={word}
      deleteWord={deleteWord}
      toggleCheck={toggleCheck}
      toggleShow={toggleShow}
    />
  ));

  return (
    <form className="form--container-flex" onSubmit={handdleSubmit}>
      <Link to="/">
        <img
          className="form--return-img"
          src={require("../image/return.webp")}
        />
      </Link>
      <input className="form--input" ref={korref} placeholder="Kor Meaning" />
      <input className="form--input" ref={engref} placeholder="Eng Meaning" />
      <button className="btn btn--blue">Add Word</button>
      <p></p>
      {wordList}
    </form>
  );
}
