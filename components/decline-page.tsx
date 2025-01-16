import { DonationInfo } from "./donation-info"

export function DeclinePage() {
  return (
    <div className="space-y-6 text-center px-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-[#6D2932]">
          Thank You For Responding
        </h1>
        <p>
          Although you won't be able to join us for the celebration, you can still make a meaningful contribution.
        </p>
      </div>
      <div className="pt-2">
        <div className="w-full max-w-[90%] mx-auto border-t border-gray-200" />
      </div>
      <div className="space-y-4">
        <p>
          In lieu of gifts, Titilayo kindly asks for your support towards:
        </p>
        <DonationInfo />
      </div>
    </div>
  )
}

