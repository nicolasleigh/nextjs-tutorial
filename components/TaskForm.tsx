import { createTask } from "@/utils/actions";
import Form from "next/form";

export default function TaskForm() {
  return (
    <Form action={createTask}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <button type='submit' className='btn btn-primary join-item'>
          Create task
        </button>
      </div>
    </Form>
  );
}
