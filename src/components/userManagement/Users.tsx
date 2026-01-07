"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Eye,
  Ban,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Types
interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  subscription: "Premium" | "Free";
  householdSize: number;
  status: "Active" | "Inactive" | "Suspended";
}

type FilterStatus = "all" | "Active" | "Inactive" | "Suspended";
type FilterSubscription = "all" | "Premium" | "Free";

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [filterSubscription, setFilterSubscription] =
    useState<FilterSubscription>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const itemsPerPage: number = 7;

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Dianne Russell",
      email: "felicia.reid@example.com",
      location: "New York, NY",
      subscription: "Premium",
      householdSize: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "Albert Flores",
      email: "debra.holt@example.com",
      location: "New York, NY",
      subscription: "Free",
      householdSize: 5,
      status: "Active",
    },
    {
      id: 3,
      name: "Darrell Steward",
      email: "tanya.hill@example.com",
      location: "Chicago, IL",
      subscription: "Premium",
      householdSize: 3,
      status: "Active",
    },
    {
      id: 4,
      name: "Jacob Jones",
      email: "jacob.jones@example.com",
      location: "Los Angeles, CA",
      subscription: "Free",
      householdSize: 2,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      location: "Houston, TX",
      subscription: "Premium",
      householdSize: 5,
      status: "Active",
    },
    {
      id: 6,
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      location: "Seattle, WA",
      subscription: "Premium",
      householdSize: 6,
      status: "Suspended",
    },
    {
      id: 7,
      name: "Eleanor Pena",
      email: "eleanor.pena@example.com",
      location: "Boston, MA",
      subscription: "Free",
      householdSize: 1,
      status: "Active",
    },
    {
      id: 8,
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      location: "Denver, CO",
      subscription: "Premium",
      householdSize: 4,
      status: "Active",
    },
    {
      id: 9,
      name: "Wade Warren",
      email: "wade.warren@example.com",
      location: "Miami, FL",
      subscription: "Free",
      householdSize: 2,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Savannah Nguyen",
      email: "savannah.nguyen@example.com",
      location: "San Jose, CA",
      subscription: "Premium",
      householdSize: 3,
      status: "Active",
    },
    {
      id: 11,
      name: "Ronald Richards",
      email: "ronald.richards@example.com",
      location: "Phoenix, AZ",
      subscription: "Free",
      householdSize: 4,
      status: "Suspended",
    },
    {
      id: 12,
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      location: "Dallas, TX",
      subscription: "Premium",
      householdSize: 2,
      status: "Active",
    },
  ]);

  // Filter and search logic
  const filteredUsers = useMemo<User[]>(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "all" || user.status === filterStatus;
      const matchesSubscription =
        filterSubscription === "all" ||
        user.subscription === filterSubscription;

      return matchesSearch && matchesStatus && matchesSubscription;
    });
  }, [users, searchTerm, filterStatus, filterSubscription]);

  // Pagination logic
  const totalPages: number = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentUsers: User[] = filteredUsers.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus, filterSubscription]);

  const handleDelete = (id: number): void => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSuspend = (id: number): void => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Suspended" ? "Active" : "Suspended",
            }
          : user,
      ),
    );
  };

  const getStatusColor = (status: User["status"]): string => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-gray-100 text-gray-700";
      case "Suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setFilterStatus(e.target.value as FilterStatus);
  };

  const handleSubscriptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setFilterSubscription(e.target.value as FilterSubscription);
  };

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              User Management
            </h1>
            <p className="text-gray-600">
              Manage all platform users and their accounts
            </p>
          </div>

          {/* Team Member Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              All Team Member
            </h2>
          </div>
        </div>

        {/* Users Card */}
        <div className="rounded-lg bg-white shadow">
          {/* Search and Filter Bar */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900">
                All Users ({filteredUsers.length})
              </h3>

              <div className="flex max-w-xl flex-1 items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchTerm(e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-lg border border-gray-300 p-2 transition-colors hover:bg-gray-50"
                  aria-label="Toggle filters"
                >
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Filter Dropdowns */}
            {showFilters && (
              <div className="mt-4 flex w-full justify-end gap-4 transition-all">
                <select
                  value={filterStatus}
                  onChange={handleStatusChange}
                  className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>

                <select
                  value={filterSubscription}
                  onChange={handleSubscriptionChange}
                  className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Subscriptions</option>
                  <option value="Premium">Premium</option>
                  <option value="Free">Free</option>
                </select>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    User Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Subscription
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Household Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentUsers.map((user: User) => (
                  <tr
                    key={user.id}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-600">
                        {user.location}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          user.subscription === "Premium"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.subscription}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-600">
                        {user.householdSize}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(user.status)}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={"/user-management/details"}
                          className="rounded p-1.5 transition-colors hover:bg-gray-100"
                          aria-label="View user"
                        >
                          <Eye className="h-4 w-4 text-gray-600" />
                        </Link>
                        <button
                          onClick={() => handleSuspend(user.id)}
                          className="rounded p-1.5 transition-colors hover:bg-gray-100"
                          aria-label="Suspend user"
                        >
                          <Ban className="h-4 w-4 text-orange-600" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="rounded p-1.5 transition-colors hover:bg-gray-100"
                          aria-label="Delete user"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredUsers.length)} of{" "}
              {filteredUsers.length} users
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index: number) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
