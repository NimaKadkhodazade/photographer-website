import "../../styles/footerStyle.css";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer py-10 [text-shadow:_0_4px_4px_black]">
      <div className="text-white flex justify-around">
        <div>© NimaDev</div>
        <div>LOGO</div>
        <div className="flex gap-3 text-xl ">
          <Link className="" href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
            <RiTelegram2Line />
          </Link>
          <Link href={""}>
            <MdOutlineEmail />
          </Link>
        </div>
      </div>
      <div className="text-white flex justify-center gap-4 py-10">
        <h3>ENG</h3>
        <h3>PER</h3>
      </div>
    </section>
  );
}
