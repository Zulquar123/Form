import React, { useState } from "react";

export default function Controlledcompo() {
  const sty = "border-2 rounded border-blue-500 m-1 p-1";
  const [val, setVal] = useState({ name: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    setVal({ name: event.target.value });
    console.log(val);
  };
  return (
    <div className="m-10">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Name"
          className={sty}
        />
        {/* <input type="text" placeholder="Address" className={sty} />
        <input type="text" placeholder="Email" className={sty} /> */}
        <input type="submit" className={sty} />
      </form>
    </div>
  );
}
