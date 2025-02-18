import type { Route } from "./+types/semi-splittable";
import { Form } from "react-router";

// Dummy variable to prevent route exports from being split
let shared: null = null;

export const clientLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return shared ?? "Hello from unsplittable client loader";
};

export const clientAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Hello from splittable client action";
};

export default function SemiSplittableRoute({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <>
      <p>{loaderData}</p>
      <p>{actionData}</p>
      <Form method="post">
        <button>Submit</button>
      </Form>
    </>
  );
}
