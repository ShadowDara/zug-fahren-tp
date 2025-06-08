import Image from "next/image";

export default function startpage() {
    return (
        <div>
            <h1 className="text-2xl">Zug fahren</h1>
            <Image
                src="/IMG_20250428_073218342.jpg"
                alt="Next.js logo"
                width={1800}
                height={1350}
                priority
            />
            <p>test</p>
        </div>
    )
}
