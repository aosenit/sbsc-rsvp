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
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const CAROUSEL_IMAGES = [
  birthdayOne,
  birthdayTwo,
  birthdayThree,
  birthdayFour,
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F2F2F2] lg:my-5 lg:py-12 lg:px-4">
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
            <div className="flex flex-col items-center py-2 gap-2">
              <div className="flex gap-2 items-center">
                <Calendar className="text-gray-500" />
                <h3 className="">February 1, 2025</h3>
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="text-gray-500" />

                <h3 className="">3:00 PM</h3>
              </div>
            </div>
            <div className="grid gap-2">
              <Link href={"/register"}>
                <Button className="w-full bg-custom-brown-dark hover:bg-custom-brown-light">
                  Yes, I will attend
                </Button>
              </Link>
              <Link href={"/decline"}>
                <Button variant="outline" className="w-full">
                  No, I can&apos;t attend
                </Button>
              </Link>
            </div>
            <p className="text-sm italic text-[#344054]">
              <span className="text-red-500">IMPORTANT:</span> This Invite
              expires on the 22/01/2025 by 5:00pm.
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
