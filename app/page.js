import Counterup from "@/components/Counterup";
import Featured_project from "@/components/Featured_project";
import Hero_banner from "@/components/Hero_banner";
import Work_list from "@/components/Work_list";
export default function Home() {
  return (
    <main className="  items-center justify-between">
      <Hero_banner />

      <Work_list />
      <Counterup />
      <Featured_project />
    </main>
  );
}
