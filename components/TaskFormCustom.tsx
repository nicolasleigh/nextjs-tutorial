"use client";

import { createTaskCustom } from "@/utils/actions";
import Form from "next/form";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary join-item uppercase' disabled={pending}>
      {pending ? "please wait..." : " Create task"}
    </button>
  );
};

const initialState = {
  message: "",
};

export default function TaskForm() {
  const [state, formAction, isPending] = useActionState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);
  return (
    <Form action={formAction}>
      {state.message ? <p className='mb-2'>{state.message}</p> : null}
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </Form>
  );
}
