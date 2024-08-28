"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasReavealEffect";

const Destinations = () => {
  return (
    <section className="w-full max-w-6xl flex flex-col items-center mx-auto">
      <h1 className="text-5xl text-white text-center font-semibold">Why Us</h1>
      <p className="text-white text-sm pt-7 w-full flex justify-center mx-auto text-center">
        Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare.
        Sed commodo tempor dapibus. Duis convallis turpis in tortor volutpat,
        eget rhoncus nisi fringilla. Phasellus ornare risus in euismod varius
        nullam feugiat ultrices. Sed condimentum est libero, aliquet iaculis
        diam bibendum ullamcorper.
      </p>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full sm:px-5 gap-4 mx-auto">
        <Card
          title="Honey Moon"
          icon={<AceternityIcon order="Honey Moon" />}
          des="Integer sollicitudin ligula non enim sodales Non lacinia nunc ornare. Sed commodo tempor dapibus. Duis convallis turpis in tortor volutpat, eget rhoncus"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Explore Nature"
          icon={<AceternityIcon order="Explore Nature" />}
          des="Integer sollicitudin ligula non enim sodales Non lacinia nunc ornare. Sed commodo tempor dapibus. Duis convallis turpis in tortor volutpat, eget rhoncus"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Amazing Travel"
          icon={<AceternityIcon order="Amazing Travel" />}
          des="Integer sollicitudin ligula non enim sodales Non lacinia nunc ornare. Sed commodo tempor dapibus. Duis convallis turpis in tortor volutpat, eget rhoncus"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  des,
  children
}: {
  title: string;
  icon: React.ReactNode;
  des: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex w-52 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Destinations;
