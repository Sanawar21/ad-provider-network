export default function AdBanner({ position = "horizontal" }: { position?: "horizontal" | "vertical" | "square" }) {
  const sizes = {
    horizontal: "h-24 sm:h-32",
    vertical: "h-96 w-full sm:w-64",
    square: "h-64 w-64",
  }

  return (
    <div
      className={`${sizes[position]} apn-ad-space bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-border border-dashed flex items-center justify-center`}
    >
      {/* <div className="text-center">
        <p className="text-muted-foreground text-sm font-medium">Advertisement</p>
        <p className="text-xs text-muted-foreground">Your ad here</p>
      </div> */}
    </div>
  )
}
