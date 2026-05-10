export default function Home() {
  return (
    <main className="flex flex-col flex-1 relative">

      {/* Hero with parallax */}
      <section
        className="relative flex items-start px-12 pt-16 pb-32"
        style={{
          minHeight: "60vh",
          backgroundColor: "#111",
          backgroundImage: "url(/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col gap-2">
          <h1 className="text-5xl font-raleway font-bold text-white tracking-tight drop-shadow-lg">
            Terrier Ride Engineering Club
          </h1>
          <p className="text-white text-xs font-source-sans drop-shadow-md">
            2026 Backstage Tour at Six Flags New England
          </p>
        </div>
      </section>

      {/* Welcome strip */}
      <section
        className="relative z-10 flex items-center justify-between px-12 py-8 gap-8"
        style={{ backgroundColor: "rgb(187 39 26)", boxShadow: "0 6px 16px -2px rgba(0,0,0,0.25)" }}
      >
        <h2 className="text-3xl font-raleway font-bold text-white shrink-0">
          Welcome to TREC!
        </h2>
        <p className="text-base text-white font-source-sans text-right">
          We have wrapped up meetings for the semester. Come see us at Fall 2026 SPLASH!.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="px-12 py-12 bg-white">
        <h2 className="text-3xl font-raleway font-bold mb-6 tracking-tight">
          Upcoming Events
        </h2>
        <ul className="list-disc list-inside font-source-sans space-y-3 text-lg text-gray-800">
          <li>Placeholder event 1 — Date TBD</li>
          <li>Placeholder event 2 — Date TBD</li>
          <li>Placeholder event 3 — Date TBD</li>
        </ul>
      </section>

      {/* Purpose */}
      <section className="relative z-10 px-8 md:px-12 py-12" style={{ backgroundColor: "rgb(187 39 26)", boxShadow: "0 6px 16px -2px rgba(0,0,0,0.25)" }}>
        <h2 className="text-3xl font-raleway font-bold mb-8 tracking-tight text-white">
          Our Purpose
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <p className="font-source-sans text-lg text-white leading-relaxed flex-1">
            TREC is a community for students who are fascinated by the engineering, design, and creativity behind theme parks and attractions. Our goal is to highlight the wide-ranging career opportunities within the amusement and theme park industry and connect students with professionals in the field. We also like to have fun by doing visits and backstage tours at theme parks. All people and majors are welcome!
          </p>
          {/* Replace /coaster.jpg with your photo */}
          <div className="w-full md:w-80 h-56 rounded-xl bg-gray-300 shrink-0" />
        </div>
      </section>

      {/* Events divider */}
      <div className="flex items-center gap-6 px-12 py-10 bg-white">
        <hr className="flex-1 border-gray-300" />
        <span className="font-raleway font-bold text-2xl tracking-tight text-gray-700 shrink-0">Events</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Ride Engineering Competition — text left, photos right, white */}
      <section className="px-8 md:px-12 py-12 bg-white flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
        <div className="md:w-1/4 flex flex-col justify-center">
          <h3 className="text-3xl font-raleway font-bold mb-6 tracking-tight">Ride Engineering Competition</h3>
          <div className="font-source-sans text-gray-600 text-sm leading-relaxed space-y-3">
            <p>The Ride Engineering Competition (REC), hosted by Ohio State University, challenges student teams to design and build fully functional scale theme park rides that conform to ASTM F24-2291 standards — the same standards that govern real amusement rides.</p>
            <p>The competition team is split into three subteams: Mechanical, Electrical, and Design. Each year, the competition prompt is released in late Fall. TREC spends the Fall semester developing our design and presenting it through a rigorous review process. Over the winter holiday, we transition into preparation for fabrication, which takes place in the spring semester.</p>
            <p className="font-semibold">All majors are welcome and encouraged to participate!</p>
            <p>All active TREC members are eligible to join the REC team. To learn more or get involved, reach out to an E-Board member or contact us at <a href="mailto:trec@bu.edu" className="underline hover:opacity-70">trec@bu.edu</a>.</p>
          </div>
        </div>
        <div className="md:w-3/4 shrink-0 flex gap-4">
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-gray-300" />
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-gray-300" />
        </div>
      </section>

      {/* No Limits 2 Design Competition — photos left, text right, red */}
      <section className="relative z-10 px-8 md:px-12 py-12 flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12" style={{ backgroundColor: "rgb(187 39 26)", boxShadow: "0 6px 16px -2px rgba(0,0,0,0.25)" }}>
        <div className="md:w-3/4 shrink-0 flex gap-4">
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-red-900/40" />
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-red-900/40" />
        </div>
        <div className="md:w-1/4 flex flex-col justify-center md:text-right">
          <h3 className="text-3xl font-raleway font-bold mb-6 tracking-tight text-white">No Limits 2 Design Competition</h3>
          <div className="font-source-sans text-white text-sm leading-relaxed space-y-3">
            <p>The NoLimits 2 Roller Coaster Design Challenge is TREC&apos;s annual 24-hour competition where participants put their roller coaster design skills to the test by designing a coaster layout that fits a specific prompt in NoLimits 2. This event is run like a 24-hour hackathon.</p>
            <p>Interested in competing? Details will be announced in the weekly TREC meetings. Want to get familiar with NoLimits 2 before the challenge? Check out the recording and slideshow from our workshop for a high-level overview of the software.</p>
          </div>
        </div>
      </section>

      {/* Theme Park Visits — text left, photos right, white */}
      <section className="px-8 md:px-12 py-12 bg-white flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
        <div className="md:w-1/4 flex flex-col justify-center">
          <h3 className="text-3xl font-raleway font-bold mb-6 tracking-tight">Theme Park Visits</h3>
          <p className="font-source-sans text-gray-600 text-sm leading-relaxed">
            TREC aims to visit at least one amusement park each semester as both an educational and team-building opportunity. In the past, we&apos;ve traveled to Six Flags New England, where we were given a behind-the-scenes maintenance tour of the park. This year, we&apos;re planning a trip to Cannobie Lake Park to learn more about their operations and continue exploring the engineering that goes into creating safe, exciting attractions.
          </p>
        </div>
        <div className="md:w-3/4 shrink-0 flex gap-4">
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-gray-300" />
          <div className="flex-1 h-64 md:h-96 rounded-xl bg-gray-300" />
        </div>
      </section>

      {/* Floating join button */}
      <a
        href="https://forms.gle/gj4Ei7caSrWZLXyz7"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 font-raleway font-bold text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "rgb(187 39 26)" }}
      >
        Join TREC →
      </a>

    </main>
  );
}
