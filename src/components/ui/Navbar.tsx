import Link from "next/link";

export default function Navbar() {
  return (
    <header className="">
      <nav className="flex justify-center gap-10">
        <div>
          <Link className="forward-link" href="/awards">
            Awards
          </Link>
        </div>
        <div>
          <Link className="forward-link" href="/gallery">
            Gallery
          </Link>
        </div>
        <div>Logo</div>
        <div>
          <Link className="forward-link" href="/courses">
            Courses
          </Link>
        </div>
        <div>
          <Link className="forward-link" href="/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
