import Link from "next/link";
import TrendingCoins from "./trending-coins";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center my-16">
          <h1 className="text-4xl md:text-6xl capitalize font-main font-semibold text-center leading-normal">
            Start building your Crypto Portfolio today
          </h1>
          <p className="font-main py-3 capitalize text-lg text-center text-neutral-300">
            discover,trade,stake and increase your crypto Portfolio with zero
            exchange chargers.
          </p>
          <Link
            href="/auth/sign-up"
            className="bg-teal-500 text-base md:text-xl px-6 py-3 rounded mt-4 text-bg font-main font-medium"
          >
            Get Start today
          </Link>
        </div>
      </div>
      <TrendingCoins />
    </section>
  );
};

export default Hero;