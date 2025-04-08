import Link from "next/link";

export default function Home() {
  return (
    <section>
      <section className="welcome-page h-screen text-white flex flex-col items-left p-2 justify-between">
        <header className="">
          <nav className="flex justify-between">
            <div>Logo</div>
            <div>
              <ul className="flex gap-6">
                <li>
                  <Link className="forward-link" href="/tutorial">
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link className="forward-link" href="/tutorial">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="forward-link" href="/tutorial">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="flex flex-col [text-shadow:_0_4px_4px_black] w-3/6 px-6 ">
          <h1 className="text-4xl">John Carter | Professional Photographer</h1>
          <h1 className="text-2xl">
            {" "}
            Capturing Life’s Most Beautiful Moments{" "}
          </h1>
          <p className="text-sm text-justify">
            Hi, I’m John Carter, a passionate photographer based in New York.
            With over 10 years of experience in portrait, wedding, and landscape
            photography, I specialize in turning fleeting moments into timeless
            memories. My journey began when I picked up my first camera at the
            age of 15, and since then, I’ve been obsessed with light,
            composition, and storytelling through images. I believe that every
            photograph should evoke emotion, whether it’s the joy of a wedding
            day, the serenity of a mountain landscape, or the raw authenticity
            of a street portrait. My work has been featured in National
            Geographic, Vogue, and several international exhibitions. When I’m
            not behind the lens, you’ll find me teaching photography workshops
            or exploring new destinations for inspiration. Let’s create
            something beautiful together.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm [text-shadow:_0_4px_4px_black]">Scroll Down</p>
          <iframe
            className="w-6 h-6"
            src="https://lottie.host/embed/f879c167-6aa5-4c86-abf7-ffd020dfbe86/NXFNwScRn9.lottie"
          ></iframe>
        </div>
      </section>
      <section className="welcome-page h-screen text-white flex flex-col items-left p-2">
        <header className="">
          <nav className="flex justify-center">
            <div>Logo</div>
          </nav>
        </header>
        <div className="flex flex-col items-center mt-6">
          <div>
            <h1 className="text-4xl [text-shadow:_0_4px_4px_black]">Photo's</h1>
          </div>
          <div>
          </div>
        </div>
      </section>
    </section>
  );
}
