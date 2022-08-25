export default function ShowSlectList({ getDayValue, days }) {
  return (
    <select onChange={getDayValue}>
      <option></option>
      {days.map((day) => {
        return day.dayNum ? (
          <option key={day.id} value={day.id}>
            Day {day.dayNum}
          </option>
        ) : (
          ""
        );
      })}
    </select>
  );
}
