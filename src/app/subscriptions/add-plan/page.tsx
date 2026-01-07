import NewPlan from "@/components/subscriptions/addPlan/NewPlanCreate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Subscription",
};

const page = () => {
  return (
    <div>
      <NewPlan />
    </div>
  );
};

export default page;
