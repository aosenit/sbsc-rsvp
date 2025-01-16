import { ErrorState } from "@/components/error-state";
import { Layout } from "@/components/layouts/Layout";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Layout>
        <ErrorState />
      </Layout>
    </div>
  );
}
