import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <Navbar isHome={false}>
        <Link href="/register" className="login">
          Sign Up
        </Link>
      </Navbar>
      <main>
        <section className="h-screen grid place-items-center">
          <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
            <h4 className="font-bold text-2xl">Sign in</h4>
            <LoginForm />
            <SocialLogins />
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
