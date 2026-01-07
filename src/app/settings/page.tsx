import SettingsPage from "@/components/settings/Settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

const page = () => {
  return (
    <div>
      <SettingsPage />
    </div>
  );
};

export default page;
