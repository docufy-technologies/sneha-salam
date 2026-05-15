import { IconQuote, IconQuoteOpen } from "@tabler/icons-react";
import type { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

export function Quoted({
  text,
  className,
}: {
  text: string;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-[min(40rem,90dvw)] flex-col justify-between gap-y-6 px-4 py-1 sm:py-8 text-center font-regular text-lg sm:text-2xl max-sm:w-[90%] max-sm:text-base",
        className,
      )}
    >
      <IconQuoteOpen
        className="absolute -top-3 sm:-top-1 -left-1.5 sm:-left-1 z-1 size-6"
        strokeWidth={1}
      />
      <IconQuote
        className="absolute -right-1.5 sm:-right-1.5 -bottom-3 sm:-bottom-1 z-1 size-6"
        strokeWidth={1}
      />
      {text}
    </div>
  );
}
