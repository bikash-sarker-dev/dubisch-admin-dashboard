import SubscriptionPlan from "@/components/subscriptions/Subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription",
};

function page() {
  return (
    <div>
      <SubscriptionPlan />
    </div>
  );
}

export default page;
