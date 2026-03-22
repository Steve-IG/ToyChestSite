import Image from "next/image";
import Link from "next/link";
import { FeatureCard, GlassCard, MetricCard, Pill } from "@/components/cards";
import { GlowOrb, Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

const contactHref =
  "mailto:info@toychest.ai?subject=ToyChest.AI%20Partnership%20Inquiry";

const proofMetrics = [
  {
    value: "Screen-first",
    title: "Kids already live in games",
    body: "Gen Alpha expects connected play, identity, and rewards to live on screen.",
  },
  {
    value: "$3B+",
    title: "The category was proven",
    body: "Toys-to-Life became a billion-dollar category because kids loved unlocking game content with toys.",
  },
  {
    value: "No hardware",
    title: "What changes with ToyChest",
    body: "Computer vision and phone cameras remove the expensive hardware friction that killed the old model.",
  },
];

const platformFeatures = [
  {
    title: "Toy Recognition Engine",
    body: "Recognizes physical toys with a camera. No bases. No chips. No extra hardware.",
  },
  {
    title: "Game SDK",
    body: "Designed for Unity and Unreal so teams can plug ToyChest into game reward systems fast.",
  },
  {
    title: "Scanner App",
    body: "Makes toy scanning work for console, PC, and companion-led experiences.",
  },
  {
    title: "Admin Portal",
    body: "Manage toy-to-reward mapping and activation rules from one clean control layer.",
  },
];

const buildIdeas = [
  "Characters",
  "Skins",
  "Quests",
  "Digital collectibles",
  "AR experiences",
  "Power boosts",
  "Vehicles",
  "Virtual currency",
];

const partnerModels = [
  {
    title: "Middleware licensing",
    body: "Studios integrate ToyChest and own the player-facing game experience.",
  },
  {
    title: "Co-development",
    body: "We help build the toy-to-game loop, content logic, and product experience together.",
  },
  {
    title: "Full game development",
    body: "We build a full toys-to-life experience around your toys, brand, and IP.",
  },
];

function CTAButton({ href, children, secondary = false, large = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition duration-300 ${
        large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${
        secondary
          ? "border border-white/20 bg-white/10 text-white shadow-[0_16px_45px_rgba(23,23,27,0.12)] hover:bg-white/16"
          : "bg-[#2c7a7b] text-white shadow-[0_16px_45px_rgba(44,122,123,0.32)] hover:-translate-y-0.5 hover:bg-[#215f60]"
      }`}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#efe8db] text-[#17171b]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(44,122,123,0.16),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(213,155,85,0.14),transparent_18%),linear-gradient(180deg,#f4ede0_0%,#efe8db_38%,#eadfcb_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17171b]/8 bg-[#efe8db] shadow-[0_10px_30px_rgba(23,23,27,0.08)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="#top" className="flex items-center">
            <Image
              src="/assets/Media/ToyChest%20logo%20horizontal%20(1).png"
              alt="ToyChest.AI"
              width={412}
              height={83}
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-lg font-medium text-black md:flex">
            <Link href="#why-toychest" className="transition hover:text-black">
              Why ToyChest.AI
            </Link>
            <Link href="#how-it-works" className="transition hover:text-black">
              How It Works
            </Link>
            <Link href="#how-we-partner" className="transition hover:text-black">
              How We Partner
            </Link>
          </nav>

          <CTAButton href={contactHref}>Contact Us</CTAButton>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-[88svh]">
        <div className="absolute inset-x-0 top-0 h-[82vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/Media/Timeline%201_01_00_32_11.jpg"
            className="h-full w-full scale-[1.08] object-cover object-center"
          >
            <source src="/assets/Media/ToyChest%20Teaser.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,27,0.5),rgba(23,23,27,0.74)_52%,rgba(23,23,27,0.88)_78%,rgba(23,23,27,0.94))]" />
        </div>

        <GlowOrb className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#2c7a7b]/20 blur-3xl" />
        <GlowOrb className="absolute right-[8%] top-40 h-64 w-64 rounded-full bg-[#d59b55]/18 blur-3xl" />

        <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl items-center justify-center px-6 pb-18 pt-28 lg:px-8 lg:pb-24">
          <div className="w-full">
            <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[5.2rem] lg:leading-[0.92]">
                Your Toys Should Do More
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-white sm:text-xl">
                What if your toys could unlock characters, items, rewards, and more inside video games?
                
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href={contactHref} large>
                  Contact Us
                </CTAButton>
                <CTAButton href="#how-it-works" secondary large>
                  See how it works
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell
        id="why-toychest"
        title="Kids still love toys. Play just moved to screens."
        description="ToyChest brings those worlds back together. The demand has already been proven. The part that needed reinventing was the hardware."
        className="pt-16 sm:pt-20"
      >
        <div className="mt-10">
          <Reveal className="grid gap-6 md:grid-cols-3" amount={0.12}>
            {proofMetrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        id="how-it-works"
        eyebrow="How It Works"
        title="Computer vision that turns toys into game content."
        description="Keep it simple: scan the toy, recognize the toy, unlock the content."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <GlassCard className="overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#17171b]/8">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/assets/Media/Timeline%201_01_00_32_11.jpg"
                  className="aspect-[4/5] w-full object-cover"
                >
                  <source
                    src="/assets/Media/ToyChest%20Teaser.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17171b] via-[#17171b]/75 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {["Scan toy", "Toy recognized", "Game unlocks"].map(
                      (step) => (
                        <div
                          key={step}
                          className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white/95"
                        >
                          {step}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {platformFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <FeatureCard
                  index={`0${index + 1}`}
                  title={feature.title}
                  body={feature.body}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="how-we-partner"
        eyebrow="How we partner"
        title="Flexible partnership models for toy brands, studios, and IP holders."
        description="We can license the platform, build together, or deliver the full experience, then map it to the kinds of toy-connected content partners want to create."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="overflow-hidden p-3">
              <div className="grid gap-3 rounded-[1.5rem] border border-[#17171b]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.45))] p-3">
                <Image
                  src="/assets/Media/Timeline%201_01_00_32_11.jpg"
                  alt="Toy scanning demo on a tablet"
                  width={1400}
                  height={900}
                  className="rounded-[1.25rem] object-cover"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Image
                    src="/assets/Media/Screenshot%20%283%29.jpg"
                    alt="ToyChest gameplay screenshot"
                    width={1200}
                    height={675}
                    className="h-full rounded-[1.25rem] object-cover"
                  />
                  <Image
                    src="/assets/Media/image%20%282%29.png"
                    alt="ToyChest admin portal screenshot"
                    width={1024}
                    height={848}
                    className="h-full rounded-[1.25rem] object-cover"
                  />
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6">
            {partnerModels.map((model, index) => (
              <Reveal key={model.title} delay={index * 0.06}>
                <GlassCard className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2c7a7b]/20 bg-[#2c7a7b]/10 text-sm font-semibold text-[#215f60]">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                        {model.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#4d4a46]">
                        {model.body}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="max-w-3xl">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#2c7a7b]">
              What we can build
            </p>
            <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#17171b] sm:text-4xl">
              Make your IP more collectible, more playable, and more connected.
            </h3>
            <p className="mt-5 text-base leading-7 text-[#4d4a46]">
              This is where partners should start imagining their own universe inside the ToyChest loop.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <GlassCard className="p-8">
            <div className="flex flex-wrap gap-3">
              {buildIdeas.map((idea) => (
                <Pill key={idea}>{idea}</Pill>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#17171b]/8 bg-[#f4ede0] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2c7a7b]">
                  Mode 1
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                  Existing game
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#4d4a46]">
                  Toy scan to entitlement to reward. Plug ToyChest into the
                  reward economy your game already has.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#17171b]/8 bg-[#f4ede0] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2c7a7b]">
                  Mode 2
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                  New game built around toys
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#4d4a46]">
                  Design the scan itself as a hero mechanic and build a new
                  toys-to-life experience without old hardware constraints.
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </SectionShell>

      <section id="contact" className="pb-24 pt-8 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#17171b]/10 bg-[linear-gradient(135deg,rgba(44,122,123,0.1),rgba(255,255,255,0.75)_35%,rgba(244,237,224,0.96))] p-8 shadow-[0_28px_90px_rgba(23,23,27,0.12)] sm:p-12">
              <GlowOrb className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#d59b55]/16 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[#2c7a7b]">
                    Early partners
                  </p>
                  <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[#17171b] sm:text-6xl">
                    Launch the next generation of toys-to-life.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#4d4a46] sm:text-lg">
                    We are looking for toy manufacturers, game studios, and IP
                    holders who want a simpler way to connect physical products
                    to digital engagement.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Pill>Toy manufacturers</Pill>
                    <Pill>Game studios</Pill>
                    <Pill>IP holders</Pill>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:min-w-[240px]">
                  <CTAButton href={contactHref}>Contact Us</CTAButton>
                  <Link
                    href="mailto:info@toychest.ai"
                    className="text-center text-sm font-medium text-[#2c7a7b] transition hover:text-[#215f60]"
                  >
                    info@toychest.ai
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
