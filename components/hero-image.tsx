import { CometCard } from "@/components/ui/comet-card";
import { PixelImage } from "./ui/pixel-image";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export function CometCardDemo() {
  return (
    // <CometCard>
    <div className="w-[304px]">

      <PixelImage src="/adil-new.jpeg" grid="8x3" />
    </div>
    // {/* </CometCard> */ }
  );
}
