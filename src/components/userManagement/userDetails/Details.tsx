"use client";
import React, { useState } from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Modal from "./Modal";

interface UserData {
  name: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  householdSize: string;
  subscription: string;
  joined: string;
}

interface EligibilityResult {
  title: string;
  subtitle: string;
  status: string;
  eligible: boolean;
}

interface Activity {
  action: string;
  time: string;
}

const UserProfileDashboard: React.FC = () => {
  const [showSuspendModal, setShowSuspendModal] = useState<boolean>(false);
  const [showBanModal, setShowBanModal] = useState<boolean>(false);

  const userData: UserData = {
    name: "Lebron James",
    email: "Lebronjames003@gmail.com",
    phone: "+880168148194",
    location: "California, USA",
    address: "New York, NY 10001",
    householdSize: "3 members",
    subscription: "Free",
    joined: "January 15, 2024",
  };

  const eligibilityResults: EligibilityResult[] = [
    {
      title: "Section 8 Housing Assistance",
      subtitle: "Federal rental assistance program",
      status: "Eligible",
      eligible: true,
    },
    {
      title: "SNAP Benefits",
      subtitle: "Income and household size meet requirements",
      status: "Eligible",
      eligible: true,
    },
    {
      title: "SNAP Benefits",
      subtitle: "Income and household size meet requirements",
      status: "Not Eligible",
      eligible: false,
    },
  ];

  const recentActivity: Activity[] = [
    { action: "Applied for SNAP benefits", time: "2 hours ago" },
    { action: "Uploaded income verification document", time: "2m ago" },
    { action: "Updated household information", time: "2m ago" },
    { action: "Checked eligibility for Medicaid", time: "2m ago" },
  ];

  const handleSuspendUser = (): void => {
    console.log("User suspended");
    // Add your suspend logic here
  };

  const handleBanAccount = (): void => {
    console.log("Account banned");
    // Add your ban logic here
  };

  return (
    <div className="">
      <div className="space-y-10">
        {/* Header Card */}
        <div className="mb-4 rounded-xl bg-white p-4 shadow-sm sm:mb-6 sm:rounded-2xl sm:p-6 sm:shadow-md md:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
            {/* Profile Image */}
            <div className="relative mx-auto sm:mx-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt={`${userData.name} profile picture`}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-purple-100 sm:h-28 sm:w-28 md:h-40 md:w-40"
              />
            </div>

            {/* User Info */}
            <div className="w-full flex-1 text-center sm:text-left">
              <h1 className="mb-2 text-xl font-bold text-gray-900 sm:mb-3 sm:text-2xl md:text-3xl">
                {userData.name}
              </h1>
              <div className="space-y-1 text-xs text-gray-600 sm:space-y-1.5 sm:text-sm">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Mail className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
                  <span className="break-all">{userData.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Phone className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
                  <span>{userData.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3">
              <button
                onClick={() => setShowSuspendModal(true)}
                className="w-full rounded-lg border-2 border-orange-300 px-4 py-2 text-sm font-medium text-orange-600 transition-all duration-200 hover:bg-orange-50 sm:w-auto sm:px-5 sm:py-2.5"
              >
                Suspend User
              </button>
              <button
                onClick={() => setShowBanModal(true)}
                className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg sm:w-auto sm:px-5 sm:py-2.5"
              >
                Ban Account
              </button>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-6 sm:gap-4 lg:grid-cols-2">
          <div className="border-bule-500 rounded-lg border-l-4 border-blue-500 bg-white p-3 shadow-sm sm:rounded-xl sm:p-4 md:p-6">
            <div className="mb-1 text-xs text-gray-500 sm:text-sm">
              Location
            </div>
            <div className="break-words text-sm font-semibold text-blue-600 sm:text-base md:text-lg">
              {userData.address}
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-white p-3 shadow-sm sm:rounded-xl sm:p-4 md:p-6">
            <div className="mb-1 text-xs text-gray-500 sm:text-sm">
              Household Size
            </div>
            <div className="text-sm font-semibold text-blue-600 sm:text-base md:text-lg">
              {userData.householdSize}
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-white p-3 shadow-sm sm:rounded-xl sm:p-4 md:p-6">
            <div className="mb-1 text-xs text-gray-500 sm:text-sm">
              Subscription
            </div>
            <div className="text-sm font-semibold text-blue-600 sm:text-base md:text-lg">
              {userData.subscription}
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-white p-3 shadow-sm sm:rounded-xl sm:p-4 md:p-6">
            <div className="mb-1 text-xs text-blue-500 sm:text-sm">Joined</div>
            <div className="text-sm font-semibold text-blue-600 sm:text-base md:text-lg">
              {userData.joined}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Eligibility Results */}
          <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5 sm:shadow-md md:p-6 lg:col-span-2">
            <h2 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
              Eligibility Results
            </h2>
            <div className="space-y-3">
              {eligibilityResults.map(
                (result: EligibilityResult, index: number) => (
                  <div
                    key={index}
                    className={`rounded-lg border-2 p-3 transition-all duration-200 hover:shadow-md sm:rounded-xl sm:p-4 ${
                      result.eligible
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="flex-1">
                        <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">
                          {result.title}
                        </h3>
                        <p className="text-xs text-gray-600 sm:text-sm">
                          {result.subtitle}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 self-start rounded-full px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm ${
                          result.eligible
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {result.eligible ? (
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                        {result.status}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5 sm:shadow-md md:p-6">
            <h2 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity: Activity, index: number) => (
                <div key={index} className="group flex gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 transition-transform group-hover:scale-150" />
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 break-words text-xs font-medium text-gray-900 sm:text-sm">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        show={showSuspendModal}
        onClose={() => setShowSuspendModal(false)}
        title="Suspend User"
        message="Are you sure you want to suspend this user? They will temporarily lose access to their account."
        confirmText="Suspend User"
        confirmColor="orange"
        onConfirm={handleSuspendUser}
      />

      <Modal
        show={showBanModal}
        onClose={() => setShowBanModal(false)}
        title="Ban Account"
        message="Are you sure you want to permanently ban this account? This action cannot be undone."
        confirmText="Ban Account"
        confirmColor="red"
        onConfirm={handleBanAccount}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UserProfileDashboard;
