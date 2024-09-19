import React, { useRef } from "react";

export default function UseRef() {
  const sty = "border-2 border-blue-500 rounded m-1";
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);
  };
  return (
    <div className="m-10 ">
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder="name" className={sty} />
        <input ref={age} type="text" placeholder="age" className={sty} />
        <input ref={email} type="text" placeholder="email" className={sty} />
        <input type="submit" className={sty} />
      </form>
    </div>
  );
}
