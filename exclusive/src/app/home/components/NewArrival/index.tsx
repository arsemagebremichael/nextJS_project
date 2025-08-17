"use client";

import Image from "next/image";

export default function FeaturedArrivals() {
  return (
    <main className=" flex items-center justify-center py-10 font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <section className="relative rounded-lg overflow-hidden bg-black h-[320px] sm:h-[480px] md:h-[640px]">
          <Image
            src="/images/game.png"
            alt="PlayStation 5 Console"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute sm:left-7 bottom-6 sm:bottom-10 z-10 text-white max-w-xs sm:max-w-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">PlayStation 5</h2>
            <p className="mb-5 text-sm sm:text-base">
              Black and White edition of the PS5<br />arriving soon.
            </p>
            <button className="border-b border-white text-white text-base sm:text-lg font-medium pb-1 hover:opacity-80">
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
        </section>

        <div className="flex flex-col gap-6 h-[320px] sm:h-[480px] md:h-[640px]">

          <section className="relative rounded-lg overflow-hidden bg-black flex-1 min-h-[150px] sm:min-h-[240px] md:min-h-[310px]">
            <Image
              src="/images/woman.png"
              alt="Women’s Collection"
              layout="fill"
              objectFit="cover"
              className="z-0"
              priority
            />
            <div className="absolute left-5 sm:left-7 bottom-6 sm:bottom-10 z-10 text-white max-w-xs sm:max-w-xs">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Women’s Collections</h2>
              <p className="mb-5 text-sm sm:text-base w-full sm:w-[280px]">
                Exclusive styles for women<br />that redefine your vibe.
              </p>
              <button className="border-b border-white text-white text-base sm:text-lg font-medium pb-1 hover:opacity-80">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent z-5" />
          </section>

          <div className="flex flex-col sm:flex-row gap-6 flex-1 min-h-[150px] sm:min-h-[240px] md:min-h-[310px]">

            <section className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0 h-48 sm:h-auto">
              <Image
                src="/images/speaker2.png"
                alt="Wireless Speakers"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
              />
              <div className="absolute left-5 sm:left-7 bottom-6 sm:bottom-10 z-10 text-white">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Speakers</h2>
                <p className="mb-5 text-sm sm:text-base">Amazon wireless speakers</p>
                <button className="border-b border-white text-white text-base sm:text-lg font-medium pb-1 hover:opacity-80">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
            </section>

            <section className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0 h-48 sm:h-auto">
              <Image
                src="/images/perf.png"
                alt="Luxury Perfume"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
              />
              <div className="absolute left-5 sm:left-7 bottom-6 sm:bottom-10 z-10 text-white">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Perfume</h2>
                <p className="mb-5 text-sm sm:text-base">GUCCI INTENSE OUD EDP</p>
                <button className="border-b border-white text-white text-base sm:text-lg font-medium pb-1 hover:opacity-80">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

