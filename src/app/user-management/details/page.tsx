import UserDetails from "@/components/userManagement/userDetails/Details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details",
};

const page = () => {
  return (
    <div>
      <UserDetails />
    </div>
  );
};

export default page;
