import { Outlet, Navigate } from "react-router-dom";
// import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  // const { isAuthenticated } = useUserContext();

  return (
    <>
      {false ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-cat.png"
            alt="logo"
            className="hidden lg:block h-screen w-2/5 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
