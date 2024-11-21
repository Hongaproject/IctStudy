import { useState } from "react";
import Button from "../component/Button";

const Contact = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <div>
      <h1>Contact</h1>
      <div>Contact 페이지 입니다.</div>
      <Button
        label="add number"
        onClick={() => {
          setNum(num + 1);
        }}
      />
      <div>{num}</div>
    </div>
  );
};

export default Contact;
