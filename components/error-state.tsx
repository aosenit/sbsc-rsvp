"use client";

import { Button } from "@/components/ui/button";
import { ErrorImage } from "@/lib/asset";
import Image from "next/image";
import { PoweredBy } from "./PoweredBy";
import { useRouter } from "next/navigation";

export function ErrorState() {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-6">
        <Image
          src={ErrorImage}
          alt="Error illustration"
          width={301}
          height={301}
          className="mx-auto"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Invitee Not Found</h2>
      <p className="text-gray-600 mb-6">
        Please ensure that the QR code scanned is the one received via your
        email.
      </p>
      <Button
        className="w-full bg-custom-brown-dark"
        onClick={() => router.back()}
      >
        Go back
      </Button>
      <div className="mt-20 flex justify-center">
        <PoweredBy />
      </div>
    </div>
  );
}
