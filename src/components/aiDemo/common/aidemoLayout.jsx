import AIDemoNav from "@/components/nav/AIDemoNav";
import Sidebar from "./sidebar";

export default function AIDemoLayout({ children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Sidebar />

        <main className="lg:pl-72">
          <AIDemoNav />
          {children}
        </main>
      </div>
    </>
  );
}
