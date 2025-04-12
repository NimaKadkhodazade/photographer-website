import AuthForm from "@/components/auth/AuthForm";
import RegisterImage from "../../../../public/picture/registerformpicture.jpg";
import Image from "next/image";

export default function Register() {
  return (
    <section
      style={{ backgroundColor: "#001128" }}
      className="h-screen flex justify-center items-center"
    >
      <div
        style={{ backgroundColor: "#53699E" }}
        className="flex items-center justify-around shadow-xl p-3 shadow-gray-500 rounded-md gap-4"
      >
        <div>
          <Image
            className="rounded-md"
            src={RegisterImage}
            key="RegisterImage"
            alt="RegisterImage"
            width={418}
          />
        </div>
        <div>
          <AuthForm />
        </div>
      </div>
    </section>
  );
}
