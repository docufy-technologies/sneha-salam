import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="h-[40dvh] max-w-lg flex flex-col justify-center gap-4 items-center text-center mx-auto pt-30">
        <h1>
          I am <span className="text-primary">Sneha Salam</span>
        </h1>
        <h5>Your Human Resources expert and Business Process specialist</h5>
      </section>

      <section className="max-w-3xl sm:py-20 h-fit mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="font-bold h-full sm:mt-1 text-center">Who I am</span>
          <span className="max-sm:text-center col-span-2 font-light max-sm:px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorem
            eveniet maxime adipisci enim quia, porro similique numquam nesciunt
            a aspernatur aliquam ratione iure, veritatis minus. Ex, deleniti.
            Hic, neque!
          </span>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="font-bold h-full sm:mt-1 text-center">
            What I Do
          </span>
          <span className="max-sm:text-center col-span-2 font-light max-sm:px-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            maxime minus fugit fugiat libero quisquam deserunt ab ipsam unde
            architecto quis molestiae voluptatum obcaecati fuga, deleniti in
            quos voluptas adipisci.
          </span>
        </div>
      </section>
    </>
  );
}
