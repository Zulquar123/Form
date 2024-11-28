import { useState } from "react";

export default function BasicFormState() {
  const [data, setData] = useState({ name: "", password: "" });

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    setData({ name: name, password: password });
    console.log(data);
    //event.target.reset();
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
          name="name"
          id=""
          className="border-2 border-sky-600"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          className="border-2 border-sky-600"
          required
        />
        <button type="Submit" className="border-2 border-sky-600">
          Submit
        </button>
      </form>
      <hr />
      <div>
        {"name : " + data.name + " \n " + "password : " + data.password}
      </div>
    </div>
  );
}
