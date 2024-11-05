import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    id: 1,
    count: "000",
    title: "Total Items",
    description: "All available inventory items.",
  },
  {
    id: 2,
    count: "000",
    title: "Assigned Items",
    description: "Items currently being used.",
  },
  {
    id: 3,
    count: "000",
    title: "Damaged Items",
    description: "Items marked as broken.",
  },
  {
    id: 4,
    count: "000",
    title: "Scheduled Check",
    description: "Pending items to be checked.",
  },
];
const Dashboard = () => {
  return (
    <div>
      <Card className="bg-[url('/library.png')] bg-cover bg-center h-[250px] flex flex-col justify-between">
        <CardHeader></CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="mt-8 scroll-m-20 text-4xl text-white font-bold tracking-tight">
            Welcome, Admin!
          </h3>
          <p className="leading-7 text-white">
            You have 5 items pending inspections today.
          </p>
        </CardFooter>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <h1 className="text-4xl text-primary font-bold tracking-tight">
            Quick Overview
          </h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {data.map((item) => (
              <Card
                key={item.id}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
              >
                <CardContent className="my-9 xl:mx-12 lg:mx-8 md:mx-1 flex lg:flex-row flex-col items-center">
                  <h1 className="text-6xl text-primary font-bold tracking-wider mr-4 md:mb-0 mb-4">
                    {item.count}
                  </h1>
                  <div className="text-left">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
