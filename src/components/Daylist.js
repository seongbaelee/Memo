import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ShowDayList from "./ShowDayList";
// import ShowSlectList from "./ShowSlectList";

export default function Daylist() {
  const [days, setDays] = useState(
    JSON.parse(localStorage.getItem("localStorage_daylist")) || []
  );
  // const [dayValue, setDayValue] = useState();

  useEffect(() => {
    localStorage.setItem("localStorage_daylist", JSON.stringify(days));
  }, [days]);

  function addDay() {
    setDays((days) => [...days, { id: nanoid(), dayNum: days.length + 1 }]);
  }

  // function getDayValue(e) {
  //   setDayValue(e.target.value);
  // }

  // function deleteDay() {
  //   console.log(dayValue);
  //   setDays((days) =>
  //     days.map((day) =>
  //       day.id !== dayValue ? { ...day } : { id: null, dayNum: null }
  //     )
  //   );
  // }

  function ClearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <div className="daylist--buttons">
        <button className="btn btn--blue btn--function" onClick={addDay}>
          Add Day
        </button>
        {/* <div className="daylist--selection">
          <button
            onClick={deleteDay}
            className="btn btn--blue btn--margin btn--function"
          >
            Delete Day
          </button>
          <ShowSlectList getDayValue={getDayValue} days={days} />
        </div> */}
        <button onClick={ClearLocalStorage} className="btn btn--blackFont">
          Clear Note
        </button>
      </div>
      <div className="daylist--days-flex daylist--days-gap">
        {days.map((day) => (
          <ShowDayList day={day} />
        ))}
      </div>
    </div>
  );
}
