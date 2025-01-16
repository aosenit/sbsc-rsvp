"use client";

import { Card } from "@/components/ui/card";
import { PoweredBy } from "./PoweredBy";
import { Skeleton } from "./ui/skeleton";

export function GuestFound({ guest, isLoading }: any) {
  return (
    <Card className="max-w-md mx-auto bg-white p-6 rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <PoweredBy />
        <h1 className="text-2xl font-semibold text-center">Guest Found</h1>
      </div>

      <div className="space-y-4 ">
        {isLoading && "Loading..."}
        {isLoading ? (
          <Skeleton className="h-[300px] w-full" />
        ) : (
          <div className="bg-gray-50 py-4 rounded-lg border-gray-300 border-[1px]">
            <h2 className="text-sm font-medium text-gray-700 mb-4  pb-2 border-b px-4">
              Personal Information
            </h2>
            <div className="space-y-4  px-4">
              <div>
                <label className="text-sm text-black mb-1 block ">
                  Full name
                </label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.invitee?.name}
                </div>
              </div>
              <div>
                <label className="text-sm text-black mb-1 block">
                  Phone number
                </label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.invitee?.phoneno}
                </div>
              </div>
              <div>
                <label className="text-sm text-black mb-1 block">Email</label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.invitee?.email}
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading ? (
          <Skeleton className="h-[300px] w-full" />
        ) : (
          <div className="bg-gray-50 py-4 rounded-lg border-gray-300 border-[1px]">
            <h2 className="text-sm font-medium text-gray-700 mb-4 border-b px-4 pb-2">
              Menu Selection
            </h2>
            <div className="space-y-4 px-4">
              <div>
                <label className="text-sm text-black mb-1 block">
                  Starters
                </label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.menu?.Starter?.[0]?.meal}
                </div>
              </div>
              <div>
                <label className="text-sm text-black mb-1 block">
                  Main Course
                </label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.menu?.["Main Course"]?.[0]?.meal}
                </div>
              </div>
              <div>
                <label className="text-sm text-black mb-1 block">Dessert</label>
                <div className="p-3 bg-white rounded-lg text-sm text-gray-500 border-gray-300 border-[1px]">
                  {guest?.menu?.Dessert?.[0]?.meal}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
