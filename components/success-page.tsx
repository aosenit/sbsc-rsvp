import Image from "next/image";
import { DonationInfo } from "./donation-info";
import { SuccessGif } from "@/lib/asset";

export function SuccessPageComp() {
  return (
    <div className="space-y-2 text-center px-4">
      <div className="flex justify-center">
        <Image
          src={SuccessGif}
          alt="Success illustration"
          width={101}
          height={101}
          className="mx-auto"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-[#6D2932]">
          Registration Successful!
        </h1>
        <p>
          Thank you for your response. Check your email for the invite and QR
          code. We can't wait to see you!
        </p>
      </div>
      <div className="pt-2">
        <div className="w-full max-w-[90%] mx-auto border-t border-custom-brown-dark border-dashed" />
      </div>
      <div className="space-y-2">
        <p>
          As we come together to celebrate this milestone, we invite you to join
          in making a difference.
        </p>
        <p>
          In lieu of birthday gifts, please support two charity organizations
          close to Titilayo's heart:
        </p>
        <DonationInfo />
      </div>
    </div>
  );
}
