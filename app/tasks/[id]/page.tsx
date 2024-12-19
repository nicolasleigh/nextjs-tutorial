import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

export default async function SingleTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const param = await params;
  const task = await getTask(param.id);

  return (
    <>
      <div className='mb-16'>
        <Link href={"/tasks"} className='btn btn-accent'>
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
}
