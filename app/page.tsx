"use client";

import { ImageCarousel } from "@/components/image-carousel";

import { Button } from "@/components/ui/button";

import birthdayOne from "@/assets/images/car1.png";
import birthdayTwo from "@/assets/images/car2.png";
import birthdayThree from "@/assets/images/car3.png";
import birthdayFour from "@/assets/images/rsvp-stanley.png";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/layouts/Layout";
import { PoweredBy } from "@/components/PoweredBy";
import { MobileBg } from "@/components/MobileBg";

export const CAROUSEL_IMAGES = [
  birthdayOne,
  birthdayTwo,
  birthdayThree,
  birthdayFour,
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F2F2F2]   lg:py-12 lg:px-4">
      <MobileBg />

      <Layout>
        <div className="space-y-6">
          <ImageCarousel images={CAROUSEL_IMAGES} />

          <div className="text-center space-y-4">
            <h1
              className="text-3xl font-bold text-custom-brown-dark great-vibes-regular"
              style={{ fontFamily: "cursive" }}
            >
              Aged to Perfection
            </h1>
            <h3 className="text-center text-xl">#Tila4.0</h3>
            <p className="text-gray-600">
              You have been invited to
              <br />
              <span className=" font-semibold uppercase text-base my-1">
                {" "}
                TITILAYO ADEWUMI&apos;S BIRTHDAY CELEBRATION.
              </span>
              <br />
              Let us know if you can make it.
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
            <p className="text-sm italic">
              <span className="text-red-500">IMPORTANT:</span> This event is
              strictly for ADULTS. Please respond by Jan 20 2025 by 2pm
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
