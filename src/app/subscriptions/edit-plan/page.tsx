import EidtPlan from "@/components/subscriptions/editPlan/EditPlan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Subscription",
};

const page = () => {
  return (
    <div>
      <EidtPlan />
    </div>
  );
};

export default page;
