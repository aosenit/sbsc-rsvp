"use client";

import { ImageCarousel } from "@/components/image-carousel";

import { Button } from "@/components/ui/button";

import birthdayOne from "@/assets/images/car1.png";
import birthdayTwo from "@/assets/images/car2.png";
import birthdayThree from "@/assets/images/car3.png";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/layouts/Layout";
import { PoweredBy } from "@/components/PoweredBy";
import { MobileBg } from "@/components/MobileBg";

export const CAROUSEL_IMAGES = [birthdayOne, birthdayTwo, birthdayThree];

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F2F2F2]   ">
      <MobileBg />

      <Layout>
        <div className="space-y-6">
          <ImageCarousel images={CAROUSEL_IMAGES} />

          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-custom-brown-dark">
              It’s Titi’s 40th 🥳
            </h1>
            <p className="text-gray-600">
              You have been invited to
              <br />
              <span className=" font-semibold uppercase text-base my-1">
                {" "}
                TITILAYO ADEWUMI&apos;S BIRTHDAY PARTY.
              </span>
              <br />
              We&apos;d love to celebrate with you! Let us know if you can make
              it.
            </p>
            <div className="space-y-2">
              <Button
                onClick={() => router.push("/register")}
                className="w-full bg-custom-brown-dark hover:bg-custom-brown-light"
              >
                Yes, I will attend
              </Button>
              <Button
                onClick={() => router.push("/decline")}
                variant="outline"
                className="w-full"
              >
                No, I can&apos;t attend
              </Button>
            </div>
            <p className="text-sm">
              <span className="text-red-500">IMPORTANT:</span> This invite
              expires on the 26/01/2024 by 12:00pm
            </p>

            <div className="flex justify-center pt-20">
              <PoweredBy />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
