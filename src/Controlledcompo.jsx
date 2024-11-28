import { useState } from "react";

export default function Controlledcompo() {
  const [val, setVal] = useState({ name: "" });

  const onChangeInput = (event) => {
    setVal({ name: event.target.value });
    console.log(val);
    console.log(val.name);
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-20 border-2 border-sky-600 w-[30%] m-auto p-10">
      <h1 className="font-bold text-3xl text-sky-600">Fill the form</h1>
      <form
        action=""
        className="flex flex-col gap-3 "
        onSubmit={handleSubmitBtn}
      >
        <input
          type="text"
          className="border-2 border-sky-600"
          onChange={onChangeInput}
        />

        <button type="Submit" className="border-2 border-sky-600">
          Submit
        </button>
      </form>
      {"Name : " + val.name}
    </div>
  );
}
