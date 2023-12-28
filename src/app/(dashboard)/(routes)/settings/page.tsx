"use client";

import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";
import Empty from "@/components/empty";
import Spinner from "@/components/spinner";

const SettingsPage = () => {
  return (
    <div>
      <Heading
        title="Settings"
        description="Change your app settings here"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8">
        {true && (
          <div className="p-8 rounded-lg w-full flex justify-center items-center">
            <Spinner />
          </div>
        )}
        <div className="space-y-4 mt-56">
          {true && true && (
            <Empty
              label=""
              icon={<Settings size={256} color="#EBECED" />} //TODO: provide proper color later
            />
          )}
        </div>
        <div className="space-y-4 mt-4">
          <h1>Setting</h1>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
