import { MyProfile } from "@/components/presentation/MyProfile";
import { Technologies } from "@/components/presentation/Technologies";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <MyProfile />
      <Technologies />
    </main>
  );
}
