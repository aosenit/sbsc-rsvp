import { DeclinePage } from "@/components/decline-page";
import { Layout } from "@/components/layouts/Layout";
import { MobileBg } from "@/components/MobileBg";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 lg:py-12 lg:px-4">
      <MobileBg />
      <Layout>
        <DeclinePage />
      </Layout>
    </div>
  );
}
