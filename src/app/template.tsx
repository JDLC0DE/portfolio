import { Navbar } from "@/components/common/navbar/navbar.component";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
