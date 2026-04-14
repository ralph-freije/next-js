"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

type AboutTeamProps = {
  title: string;
  members: TeamMember[];
};

export default function AboutTeam({ title, members }: AboutTeamProps) {
  return (
    <section className="w-full py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-black">{title}</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {members.map((member) => (
            <SwiperSlide key={member.id} className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="relative h-[120px] w-[120px] rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold text-black">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}