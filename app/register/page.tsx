"use client";

import { Layout } from "@/components/layouts/Layout";
import { RegistrationForm } from "@/components/registration-form";

import { useCreateData } from "@/hooks/use-apis";
import { REGISTERURL } from "@/lib/api";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function RegistrationFormPage() {
  const router = useRouter();
  const createInviteeState = useCreateData(REGISTERURL);

  const handleFormSubmit = async (data: any) => {
    const payload = {
      event_id: "4d376275-be64-4eed-989d-20d76cc84498",
      name: data?.fullName,
      email: data?.email,
      phoneno: data?.phoneNumber,
      menu_items: Object.values(data?.menuSelection),
      plus_one: "false",
    };

    try {
      const res = await createInviteeState.mutateAsync(payload);
      if (res) {
        router.push("/success");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(
        error?.response?.data?.message || "An error occured, please retry",
        {
          className: "bg-red-500 text-white",
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 grid items-center">
      <Layout>
        <RegistrationForm
          onSubmit={handleFormSubmit}
          isSubmitting={createInviteeState.isPending}
        />
      </Layout>
    </div>
  );
}
