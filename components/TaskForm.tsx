import prisma from "@/utils/db";
import Form from "next/form";
import { revalidatePath } from "next/cache";

const createTask = async (formData: FormData) => {
  "use server";
  const content = formData.get("content") as string;
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

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
