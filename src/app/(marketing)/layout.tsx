import Navbar from "@/app/(marketing)/_components/Navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="selection:bg-red-300">
      <Navbar />
      {children}
    </div>
  );
};

export default MarketingLayout;
