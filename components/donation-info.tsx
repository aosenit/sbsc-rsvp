import { PoweredBy } from "./PoweredBy";
import background from "@/assets/images/rsvp-bg.jpeg";

interface DonationInfoProps {
  className?: string;
}

export function DonationInfo({ className = "" }: DonationInfoProps) {
  return (
    <div className={`space-y-4 text-center text-gray-600 ${className}`}>
      <ul className="space-y-1 font-bold  text-black">
        <li>• Sickle Cell Foundation Nigeria</li>
        <li>• Helpmeet A Need Global Foundation</li>
      </ul>
      <p>Donations will be matched 1:1 by Titilayo to double their impact.</p>
      <div
        className="bg-[#4A071C] text-white rounded-lg p-4 space-y-1 text-lg bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <p className="font-medium text-gray-400">Make donation to:</p>
        <p>Acct: Opay</p>
        <p>Acct No: 8174435843</p>
        <p>Acct Name: Titilayo Adewumi</p>
      </div>
      <p className="text-sm">
        Thank you for your generosity and for being part of this special
        milestone.
      </p>
      <div className="flex justify-center pt-20">
        <PoweredBy />
      </div>
    </div>
  );
}
