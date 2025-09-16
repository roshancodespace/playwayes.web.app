import React from 'react';
import DarkVeil from '@/components/DarkVeil';
import { ArrowRight, LockIcon } from 'lucide-react';
import Link from 'next/link';
import { BsSpeedometer } from 'react-icons/bs';
import SpotlightCard from '@/components/SpotlightCard';
import { BiMobile } from 'react-icons/bi';
import ScrollFloat from '@/components/ScrollFloat';
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

const PlaywavesLanding = async () => {
  // const downloadUrl = await fetchLatestArm64V8aApk('Bhanu7773-dev', 'PlayWaves-Releases')
  const downloadUrl = '#';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center min-h-screen flex">
        <div className="w-screen h-screen absolute top-0 left-0 z-0">
          <div className="w-full h-full max-md:hidden">
            <DarkVeil />
          </div>
          <img
            src="/bg.png"
            alt="background"
            className="w-full h-full object-cover md:hidden z-0"
          />
        </div>
        <div className="max-w-2xl m-auto relative flex flex-col items-center z-[1]">
          <h1 className="text-3xl font-bold md:text-7xl text-shadow-2xs">
            Playwaves
          </h1>
          <p className="mt-3">PlayWaves — Your Galaxy of Music</p>
          <p className="mt-5 text-zinc-500">
            Experience music like never before. PlayWaves combines a stunning
            animated galaxy theme with high-quality streaming and full
            personalization.
          </p>
          <div className="flex max-md:flex-col-reverse items-center mt-8 md:space-x-8 max-md:gap-3 *:cursor-pointer">
            <Link
              href={downloadUrl ?? '#'}
              className="text-semibold rounded-full px-8 py-6 md:px-14 md:py-8 hover:border border-zinc-500 hover:bg-white/10 transition-all"
            >
              Download Now
            </Link>
            <Link href='/#features' className="text-semibold rounded-full px-8 py-6 md:px-14 md:py-8 border border-zinc-500 hover:bg-white/10 transition-all flex items-center gap-3">
              Explore Features <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-14 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-2xl font-medium"
            >
              Powerful Features
            </ScrollFloat>
            <p className="mt-5 text-zinc-500">
              Playwaves combines powerful features with a sleek and intuitive
              interface. Your gateway to the ultimate music experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: <BiMobile />,
                title: 'Minimal Design',
                description:
                  'Clean, intuitive interface that puts your music first. No clutter, no distractions—just pure musical experience.',
              },
              {
                icon: <BsSpeedometer />,
                title: 'Peak Performance',
                description:
                  'Optimized for speed and efficiency. Lightning-fast startup, smooth transitions, and minimal battery consumption.',
              },
              {
                icon: <LockIcon />,
                title: 'Privacy First',
                description:
                  'Your music, your data, your privacy. No tracking, no data collection, no compromises on your personal information.',
              },
            ].map((feature, index) => (
              <SpotlightCard key={index}>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-2xl font-medium"
            >
              App Gallery
            </ScrollFloat>
            <p className="mt-5 text-zinc-500">
              A glimpse of PlayWaves’ stunning interface and smooth user
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {['/home.png', '/player.png', '/search.png'].map((src, i) => (
              <div className='bg-zinc-900 p-3 rounded-xl' key={i}>
                <img
                  src={src}
                  alt={`screenshot-${i + 1}`}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="text-2xl font-medium"
          >
            Download Playwaves
          </ScrollFloat>
          <p className="mt-5 text-zinc-500">
            Get started with Playwaves today. Download the latest Android build
            and enjoy a galaxy of music at your fingertips.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            {/* Android Download */}
            <a
              href={downloadUrl ?? "#"}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all text-white shadow-lg"
            >
              <BiMobile className="text-2xl" />
              <span className="font-medium">Download for Android</span>
            </a>

            {/* GitHub Releases */}
            <a
              href="https://github.com/Bhanu7773-dev/PlayWaves-Releases"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-zinc-700 hover:bg-white/10 transition-all"
            >
              <FaGithub className="text-2xl" />
              <span className="font-medium">Releases on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black relative">
        <div className="max-w-6xl mx-auto">
          {/* Gradient Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mb-10"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white">Playwaves</h2>
              <p className="text-zinc-500 mt-1">Your Galaxy of Music</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-zinc-400 text-lg">
              <a
                href="https://t.me/darkdevil7773"
                target="_blank"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                <FaTelegram className="text-xl" /> Telegram
              </a>
              <a
                href="https://www.instagram.com/bhanu.pratap__7773?igsh=MWZoM2w5NTZqeHc2NQ=="
                target="_blank"
                className="hover:text-pink-500 transition-colors flex items-center gap-2"
              >
                <FaInstagram className="text-xl" /> Instagram
              </a>
              <a
                href="https://github.com/Bhanu7773-dev"
                target="_blank"
                className="hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center text-zinc-600 mt-8 text-sm">
            © 2025 Playwaves. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PlaywavesLanding;
