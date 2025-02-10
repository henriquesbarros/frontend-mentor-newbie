import { Card } from "@/components/card";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center">
      <div className="pt-[85px] pb-[78px]">
        <div className="mb-4">
          <h1 className="text-center text-2xl lg:text-4xl tracking-[0.17px] text-gray-cool font-extralight">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-center text-2xl lg:text-4xl tracking-[0.17px] text-gray-cool font-semibold">
            Powered by Technology
          </h2>
        </div>
        <p className="m-auto max-w-[312px] lg:max-w-[540px] text-[15px] text-center text-gray-cool/50 tracking-[0.1px] mb-[76px]">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[30px]">
          <Card
            title="Supervisor"
            subtitle="Monitors activity to identify project roadblocks"
            imageSrc="/icon-supervisor.svg"
            imageAlt="Supervisor icon"
            borderColor="border-teal-light"
          />

          <div className="flex flex-col gap-[23px] lg:gap-[30px]">
            <Card
              title="Team Builder"
              subtitle="Scans our talent network to create the optimal team for your project"
              imageSrc="/icon-team-builder.svg"
              imageAlt="Team buider icon"
              borderColor="border-rose-bright"
            />
            <Card
              title="Karma"
              subtitle="Regularly evaluates our talent to ensure quality"
              imageSrc="/icon-karma.svg"
              imageAlt="Karma icon"
              borderColor="border-amber-warm"
            />
          </div>

          <Card
            title="Calculator"
            subtitle="Uses data from past projects to provide better delivery estimates"
            imageSrc="/icon-calculator.svg"
            imageAlt="Calculator icon"
            borderColor="border-blue-soft"
          />
        </div>
      </div>
    </main>
  );
}


























