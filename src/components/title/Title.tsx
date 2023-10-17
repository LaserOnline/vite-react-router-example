import { useEffect } from 'react';

function Title() {
  useEffect(() => {
    // * จดจำ title ปัจจุบัน
    const previousTitle = document.title;
    // * เปลี่ยน title เมื่อ component นี้ถูกเรนเดอร์
    document.title = 'Hello World'; 

    // * กลับไปตั้งค่า title ด้วยค่าที่จดจำไว้
    return () => {
      document.title = previousTitle;
    };
  }, []);


  return (
    <div>Title</div>
  )
}

export default Title