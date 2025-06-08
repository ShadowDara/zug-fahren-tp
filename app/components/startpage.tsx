'use client';

import Image from "next/image";
import Copyright from "./copyright";

export default function startpage() {
  return (
    <div>
      <div className="grid gap-25 place-items-center mb-15 px-4 overflow-x-hidden">
        <div className="grid gap-5 place-items-center">
          <h1 className="text-8xl mt-20 text-center">
            Zug fahren!
          </h1>
          <p className="text-2xl text-center">
            Der kommt sicher zügig!
          </p>
        </div>

        <div className="text-xl">
          <p>Life is so fast most of the time!</p>
          <p>We should take some moments and look we have at the moment and what we really need!</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/IMG_20250428_073218342.jpg"
            alt="Zug bild!"
            width={1000}
            height={750}
            priority
          />
          <p>
            dunkel rote Diesellokomotive and Bahnhof
          </p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/Regenwetter_verschwo.jpg"
            alt="verschwommen bei Regenwetter"
            width={750}
            height={1000}
            priority
          />
          <p>verschwommener Regentag</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/sad.jpg"
            alt="windows error screen"
            width={750}
            height={1000}
            priority
          />
          <p>traurige Fehlernachricht</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/black-white.jpg"
            alt="schwarz weiß bild in der Nacht"
            width={600}
            height={600}
            priority
          />
          <p>dunkle Nacht in schwarz weiß</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/physikversuch.jpg"
            alt="schwarz weiß bild in der Nacht"
            width={750}
            height={1000}
            priority
          />
          <p>Electronenstrahl</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/strasse.jpg"
            alt="erhellte straße"
            width={550}
            height={700}
            priority
          />
          <p>erhelltes Straßenviertel in der Nacht</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/silvester.jpg"
            alt="feuerwerk"
            width={600}
            height={700}
            priority
          />
          <p>helles feuerwerk im dunkeln</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/nebelweg.jpg"
            alt="nebelweg"
            width={700}
            height={700}
            priority
          />
          <p>nebeliger weg im dunkeln</p>
        </div>

        <div className="grid gap-7 place-items-center">
          <Image
            className="max-w-full h-auto"
            src="/end-quote.jpg"
            alt="My friends are my World!"
            width={400}
            height={1000}
            priority
          />
          <p>my friends are my world!</p>
          <p className="text-2xl">&lt;3</p>
        </div>

      </div>
      <Copyright />
    </div>
  )
}
