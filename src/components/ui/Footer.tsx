import "../../styles/globals.css";
import { Instagram, Mail } from "lucide-react";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer [text-shadow:_0_4px_4px_black]">
      <div className="text-white flex justify-around pt-6">
        <div>© NimaDev</div>
        <div>LOGO</div>
        <div className="flex gap-3 text-xl ">
          <Link className="" href={""}>
            <Instagram size={20} strokeWidth={1.8} />
          </Link>
          <Link href={""}>
            <RiTelegram2Line />
          </Link>
          <Link href={""}>
            <Mail size={20} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
      <div className="text-white flex justify-center gap-4 pt-10 pb-6">
        <h3>ENG</h3>
        <h3>PER</h3>
      </div>
    </section>
  );
}
