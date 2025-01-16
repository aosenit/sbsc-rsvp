import { Layout } from "@/components/layouts/Layout";
import { MobileBg } from "@/components/MobileBg";
import { SuccessPageComp } from "@/components/success-page";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 lg:py-12 lg:px-4">
      <MobileBg />
      <Layout>
        <SuccessPageComp />
      </Layout>
    </div>
  );
}
