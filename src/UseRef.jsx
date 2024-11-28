import { useRef } from "react";

export default function UseRef() {
  const name = useRef(null);
  const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputname = name.current.value;
    const inputpassword = password.current.value;
    console.log(inputname, inputpassword);
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-20 border-2 border-sky-600 w-[30%] m-auto p-10">
      <h1 className="font-bold text-3xl text-sky-600">Fill the form</h1>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          className="border-2 border-sky-600"
          required
          ref={name}
        />
        <input
          type="password"
          name="password"
          id=""
          className="border-2 border-sky-600"
          required
          ref={password}
        />
        <button type="Submit" className="border-2 border-sky-600">
          Submit
        </button>
      </form>
      {/* <div>
       
        {"name : " + inputname + " \n " + "password : " + inputpassword}   will not work because there is no state
      </div> */}
    </div>
  );
}

// import { useRef } from "react";

// export default function UseRef() {
//   const sty = "border-2 border-blue-500 rounded m-1 p-1";
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name.current.value, age.current.value, email.current.value);
//   };
//   return (
//     <div className="m-10 ">
//       <form action="" onSubmit={handleSubmit}>
//         <input ref={name} type="text" placeholder="name" className={sty} />
//         <input ref={age} type="text" placeholder="age" className={sty} />
//         <input ref={email} type="text" placeholder="email" className={sty} />
//         <input type="submit" className={sty} />
//       </form>
//     </div>
//   );
// }
