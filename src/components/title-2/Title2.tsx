import { useEffect } from 'react';
import Logo from '../../assets/react.gif'; // แก้ไขการ import

function Title2() {
    
    useEffect(() => {
        const linkElement = document.querySelector("link[rel~='icon']") as HTMLLinkElement; 
        if (!linkElement) return;
    
        const previousHref = linkElement.href; //* จดจำ icon ปัจจุบัน
        linkElement.href = Logo; //* // เปลี่ยนไปยัง icon ใหม่
    
        return () => {
          linkElement.href = previousHref; //* กลับไปตั้งค่า icon ด้วยค่าที่จดจำไว้
        };
      }, []);
      
  return (
    <div>Title2</div>
  )
}

export default Title2;
