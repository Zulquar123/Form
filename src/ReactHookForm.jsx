import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const sty = "border-2 border-blue-500 rounded m-1 p-1 ";

  const submit = (data, event) => {
    console.log(data);
    console.log(data.name, data.address);
    event.target.reset();
  };
  return (
    <div className="m-10">
      <form action="" onSubmit={handleSubmit(submit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className={sty}
          required
        />
        <input
          {...register("address")}
          type="text"
          placeholder="address"
          className={sty}
          required
        />
        <input type="submit" className={sty} />
      </form>
    </div>
  );
}
