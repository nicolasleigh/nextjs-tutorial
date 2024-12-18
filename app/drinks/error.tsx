"use client";

export default function error({ error }: { error: Error }) {
  // return <div>There was an error.....</div>;
  return <div>{error.message}</div>;
}
