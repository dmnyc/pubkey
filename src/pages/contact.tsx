import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <NextSeo title="Contact" />
      <Image
        alt="The Pubkey slogan"
        className="self-center"
        height={200}
        src="/images/contact/slogan.svg"
        width={1024}
      />
      <div className="flex flex-col md:flex-row gap-y-24 gap-x-24 lg:gap-x-48 w-full max-w-5xl">
        <Image
          alt="A payphone"
          className="self-center"
          height={400}
          src="/images/contact/payphone.svg"
          width={200}
        />
        <div className="flex flex-col gap-y-8">
          <h2 className="uppercase text-xl tracking-wider">Contact</h2>
          <div className="font-redaction text-lg tracking-wider">
            <p>85 Washington Pl.</p>
            <p>New York,</p>
            <p>NY 10011</p>
          </div>
          <div className="flex flex-col font-redaction text-lg tracking-wider">
            <a href="tel:3057734249">(305) 773-4249</a>
            <a href="mailto:events@port8333.io">events@port8333.io</a>
          </div>
          <div className="flex flex-col font-redaction text-lg tracking-wider">
            <a
              className="hover:text-gray-700"
              href="https://t.me/+HyDKC9gR7VsyNjc5"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="hover:text-gray-700"
              href="https://twitter.com/PubKey_NYC"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 w-full md:w-64">
          <h2 className="uppercase text-xl tracking-wider">Hours</h2>
          <div className="flex flex-col flex-grow font-redaction text-lg italic tracking-widest">
            <div className="flex justify-between">
              <p>Monday</p>
              <p>1pm&mdash;2am</p>
            </div>
            <div className="flex justify-between">
              <p>Tuesday</p>
              <p>1pm&mdash;2am</p>
            </div>
            <div className="flex justify-between">
              <p>Wednesday</p>
              <p>1pm&mdash;2am</p>
            </div>
            <div className="flex justify-between">
              <p>Thursday</p>
              <p>1pm&mdash;4am</p>
            </div>
            <div className="flex justify-between">
              <p>Friday</p>
              <p>1pm&mdash;4am</p>
            </div>
            <div className="flex justify-between">
              <p>Saturday</p>
              <p>1pm&mdash;4am</p>
            </div>
            <div className="flex justify-between">
              <p>Sunday</p>
              <p>12pm&mdash;2am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
