'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A42] to-[#5D6EE0] dark:from-[#1E1E2E] dark:to-[#4C5FD5]">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-[120px]"></div>
      </div>
      <div className="dark:bg-tw-gradient-hero-dark bg-tw-gradient-hero-light pointer-events-none absolute bottom-0 left-0 right-0 h-80"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ y: useTransform(scrollY, [0, 50], [0, -50]) }}
          >
            <h1
              className="md:text text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="block">jakubjereczek.com</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg text-white"
              style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}
            >
              A blog about coding and modern technologies — diving into the
              future of (web) development, one post at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y: useTransform(scrollY, [0, 50], [0, -45]) }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/about"
              className="rounded-lg border border-white bg-white px-6 py-3 font-medium shadow-md backdrop-blur-sm transition-all hover:shadow-[0px_0px_10px_rgba(255,255,255,0.9)]"
            >
              About the blog
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <ArrowRight size={12} />
              </motion.span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ y: useTransform(scrollY, [0, 50], [0, -40]) }}
            className="mt-12 flex justify-center gap-8 sm:gap-16"
          >
            <div className="text-center text-gray-900 dark:text-white">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                3+
              </p>
              <p className="text-sm text-inherit">Years in Tech</p>
            </div>
            <div className="text-center text-gray-900 dark:text-white">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                2+
              </p>
              <p className="text-sm text-inherit">In-Depth Articles</p>
            </div>
            <div className="text-center text-gray-900 dark:text-white">
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-inherit">Monthly Readers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
