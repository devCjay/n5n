import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="text-red-500 text-center">
    <h1 className="text-6xl font-bold">
          Hello world! This is Next.js
          <br />
          <Button className="ml-4">Click Me</Button>
    </h1>
    </div>
  );
};

export default Page;