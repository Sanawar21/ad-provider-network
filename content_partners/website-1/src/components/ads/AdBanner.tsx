import { Card } from "@/components/ui/card";

interface AdBannerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const AdBanner = ({ size = "medium", className = "" }: AdBannerProps) => {
  const sizeClasses = {
    small: "h-24",
    medium: "h-32",
    large: "h-48",
  };

  return (
    <Card className={`${sizeClasses[size]} ${className} bg-muted border-dashed flex items-center justify-center apn-ad-space`}>
      {/* <div className="text-center">
        <p className="text-sm text-muted-foreground font-medium">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">Your ad could be here</p>
      </div> */}
    </Card>
  );
};

export default AdBanner;
