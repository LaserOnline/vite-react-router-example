import { useEffect, useRef, useState } from "react";
import { countNumber, showMessage } from "./Logic";
import "./Home.css";
import Popup from "../pop-up/Popup";

function Home() {
  const renderCount = useRef(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message, setMessage] = useState("This is an alert popup!");

  useEffect(() => {
    countNumber(renderCount);

    // * ถ้าต้องการแสดงข้อความจาก function showMessage ใน popup:
    const popupMessage = showMessage("GGez");
    setMessage(popupMessage);

    // * แสดง popup ทันทีเมื่อ component ถูกเรนเดอร์
    setPopupOpen(false);
  }, []);

  return (
    <div>
      <div>Home Components</div>
      <button onClick={() => setPopupOpen(true)}>Show Popup</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        message={message}
      />
    </div>
  );
}

export default Home;
