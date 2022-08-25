export default function Word({ word, deleteWord, toggleCheck, toggleShow }) {
  return (
    <div className={word.isDone ? "table--dimmed" : ""}>
      <table>
        <tr>
          <td>
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => toggleCheck(word.uniqueId)}
              checked={word.isDone}
            />
          </td>
          <td>
            <p className="wordlist--word">{word.kor}</p>
          </td>
          <td>
            <p className="wordlist--word">{word.isShown && word.eng}</p>
          </td>
          <td>
            <div
              onClick={() => toggleShow(word.uniqueId)}
              className="btn btn--blue btn--word"
            >
              {word.isShown ? "Hide" : "Show"} meaning
            </div>
          </td>
          <td>
            <div
              onClick={() => deleteWord(word.uniqueId)}
              className="btn btn--red btn--word"
            >
              Delete
            </div>
          </td>
        </tr>
      </table>
    </div>
    // <div
    //   className={`wordlist--container ${word.isDone ? "wordlist--dimmed" : ""}`}
    // >
    //   <input
    //     className="checkbox"
    //     type="checkbox"
    //     onClick={() => toggleCheck(word.uniqueId)}
    //     checked={word.isDone}
    //   />
    //   <div className="wordlist">
    //     <p className="wordlist--word">{word.kor}</p>
    //     <p className="wordlist--word">{word.isShown && word.eng}</p>
    //   </div>
    //   <div
    //     onClick={() => toggleShow(word.uniqueId)}
    //     className="btn btn--blue btn--word"
    //   >
    //     {word.isShown ? "Hide" : "Show"} meaning
    //   </div>
    //   <div
    //     onClick={() => deleteWord(word.uniqueId)}
    //     className="btn btn--red btn--word"
    //   >
    //     Delete
    //   </div>
    // </div>
  );
}
