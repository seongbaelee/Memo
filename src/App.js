import Header from "./components/Header";
import Daylist from "./components/Daylist";
import DayForm from "./components/DayForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Daylist />} />
          <Route path="/day/:day" element={<DayForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
