import Image from "next/image";

export default function startpage() {
  return (
    <div className="grid gap-20 place-items-center mb-[50]">
      <h1 className="text-8xl/10 mt-[120]">
        Zug fahren
      </h1>
      <p className="text-2xl/0">
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
    </div>
  )
}
