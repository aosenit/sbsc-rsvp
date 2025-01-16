import background from "@/assets/images/rsvp-bg.jpeg";

export const MobileBg = () => {
  return (
    <div className=" lg:hidden">
      <div
        className="bg-[#4A071C] text-white  space-y-1 text-lg bg-cover bg-no-repeat bg-center h-[80px] w-full max-w-md mx-auto relative "
        style={{ backgroundImage: `url(${background.src})` }}
      ></div>
    </div>
  );
};
