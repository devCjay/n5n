import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";


const Page = async () => {
   const users = await prisma.user.findMany();
  return (
    <div className="text-red-500 text-center">
    <h1 className="text-6xl font-bold">
          Hello world! This is Next.js
          <br />
          <Button className="ml-4">Click Me</Button>
          <br />
          {JSON.stringify(users)}
    </h1>
    </div>
  );
};

export default Page;