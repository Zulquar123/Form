import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const sty = "border-2 border-blue-500 rounded m-1 p-1 ";

  return (
    <div className="m-10">
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className={sty}
        />
        <input
          {...register("address")}
          type="text"
          placeholder="address"
          className={sty}
        />
        <input type="submit" className={sty} />
      </form>
    </div>
  );
}
