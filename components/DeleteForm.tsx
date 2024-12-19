import { deleteTask } from "@/utils/actions";
import Form from "next/form";

export default function DeleteForm({ id }: { id: string }) {
  return (
    <Form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-xs btn-error'>delete</button>
    </Form>
  );
}
