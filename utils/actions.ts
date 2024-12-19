"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id: string) => {
  return prisma.task.findUnique({
    where: { id },
  });
};

export const editTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const completed = formData.get("completed") as string;

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
