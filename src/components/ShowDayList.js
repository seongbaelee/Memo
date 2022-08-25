import { Link } from "react-router-dom";

export default function ShowDayList({ day }) {
  return (
    <Link key={day.id} to={`/day/${day.dayNum}`}>
      {day.dayNum && (
        <button className="btn btn--red btn--day">Day {day.dayNum}</button>
      )}
    </Link>
  );
}
