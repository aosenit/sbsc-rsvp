"use client";

import { GuestFound } from "@/components/guest-found";
import { useFetchPostData } from "@/hooks/use-apis";
import { QRCODEURL } from "@/lib/api";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuestFoundPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const payload = {
    qr_code: location,
  };

  const QRScannerState = useFetchPostData(QRCODEURL, payload);

  if (QRScannerState.isError) {
    router.push("/error");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.href);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 lg:py-12 lg:px-4">
      <GuestFound
        guest={QRScannerState?.data?.data}
        isLoading={QRScannerState.isPending}
      />
    </div>
  );
}
