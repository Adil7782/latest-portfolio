import { CometCard } from "@/components/ui/comet-card";

export function CometCardDemo() {
  return (
    <CometCard>
      <div className="flex justify-center items-center py-10">
        {/* Circle image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <img
            src="/adil.jpg"
            alt="Invite background"
            className="rounded-full object-cover w-full h-full shadow-lg"
          />
        </div>
      </div>
    </CometCard>
  );
}
