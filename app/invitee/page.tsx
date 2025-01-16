"use client";

import { GuestFound } from "@/components/guest-found";
import { useFetchPostData } from "@/hooks/use-apis";
import { QRCODEURL } from "@/lib/api";

import { useRouter } from "next/navigation";

export default function GuestFoundPage() {
  const router = useRouter();

  const location = window.location.href;

  const payload = {
    qr_code: location,
  };

  const QRScannerState = useFetchPostData(QRCODEURL, payload);

  if (QRScannerState.isError) {
    router.push("/error");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <GuestFound
        guest={QRScannerState?.data?.data}
        isLoading={QRScannerState.isPending}
      />
    </div>
  );
}
