"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

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

export const createTaskCustom = async (prevState: { message: string }, formData: FormData) => {
  // await new Promise((r) => setTimeout(r, 2000));

  const content = formData.get("content") as string;
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success!!" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
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
