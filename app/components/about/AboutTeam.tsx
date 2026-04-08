import Image from "next/image";

const team = [
  { name: "ralph", role: "Frontend Developer" },
  { name: "michel", role: "Backend Developer" },
  { name: "peter", role: "UI/UX Designer" },
];

export default function AboutTeam() {
  return (
    <section className="w-full py-16 bg-white text-center">

      <h2 className="text-3xl font-semibold mb-10 text-black">
        Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-8">

        {team.map((member, i) => (
          <div key={i} className="w-[200px] group">

            {/* IMAGE */}
            <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/avatar.jpg"
                alt={member.name}
                fill
                sizes="200px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="font-semibold text-black">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>

          </div>
        ))}

      </div>

    </section>
  );
}