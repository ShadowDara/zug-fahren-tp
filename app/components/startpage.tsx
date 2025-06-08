import Image from "next/image";

export default function startpage() {
  return (
    <div className="grid gap-15 place-items-center mb-[50]">
      <h1 className="text-8xl mt-[120] text-center">
        Zug fahren
      </h1>
      <p className="text-2xl text-center">
        Der kommt sicher zügig!
      </p>
      <Image
        src="/IMG_20250428_073218342.jpg"
        alt="Zug bild!"
        width={1000}
        height={750}
        priority
      />
      <p>mehr text soon...</p>

      <p>mehr text soon... 2</p>

    </div>
  )
}
