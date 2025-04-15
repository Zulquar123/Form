export default function BasicForm() {


  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    form.reset();
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-20 border-2 border-sky-600 w-[30%] m-auto p-10">
      <h1 className="font-bold text-3xl text-sky-600">Fill the form</h1>
      <form
        action=""
        className="flex flex-col gap-3"
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
          type="email"
          name="email"
          id=""
          className="border-2 border-sky-600"
          required
        />
        <button type="Submit" className="border-2 border-sky-600">
          Submit
        </button>
      </form>
      {/* <div>{`Name : ${name} and Email : ${email}`}</div> Not work because state should be defined. */}
    </div>
  );
}
