import { ReactNode } from "react";
import { Navbar } from "../componets";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="py-16 max-w-3xl px-4  mx-auto min-h-screen ">
        {children}
      </main>
    </>
  );
};

export default Layout;
