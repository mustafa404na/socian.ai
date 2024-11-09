import MobileBottomBtnLayout from "./MobileBottomBtnLayout";

export default function MobileLayout({ children }) {
  return (
    <div className="grid mx-auto justify-between scrollElement px-5 w-full">
      {children}
      <MobileBottomBtnLayout />
    </div>
  );
}
