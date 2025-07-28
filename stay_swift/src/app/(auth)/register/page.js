import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <>
      <Navbar>
        <Link href="/login" className="login">
          Login
        </Link>
      </Navbar>
      <main>
        <section className="h-screen grid place-items-center">
          <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
            <h4 className="font-bold text-2xl">Sign up</h4>
            <RegistrationForm />
            <SocialLogins />
          </div>
        </section>
      </main>
    </>
  );
};

export default RegistrationPage;
