/** biome-ignore-all lint/suspicious/noExplicitAny: <just works> */
import { type MotionProps, motion } from "framer-motion";
import type React from "react";
import { cn } from "@/lib/utils";

type AnimatedButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "accent"
  | "link";

type AnimatedButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    children?: React.ReactNode;
    as?: any;
    variant?: AnimatedButtonVariant;
    size?: AnimatedButtonSize;
  };

const variantClasses: Record<AnimatedButtonVariant, string> = {
  default: "bg-primary text-primary-foreground",
  outline: "bg-background text-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-transparent text-foreground",
  destructive: "bg-destructive/10 text-destructive",
  accent: "bg-accent text-accent-foreground",
  link: "bg-transparent text-primary",
};

const sizeClasses: Record<AnimatedButtonSize, string> = {
  default:
    "h-9 gap-1.5 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
  xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
  lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
  icon: "size-9",
  "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
};

/**
 * AnimatedButton
 * - theme-aware: uses Tailwind `dark:` classes so it works in both light and dark mode
 * - accepts all native button props (onClick, className, type, etc.)
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children = "Browse Components",
  className = "",
  as = "button",
  variant = "default",
  size = "default",
  ...rest
}) => {
  const Component = (motion as any)[as] || motion.button;

  return (
    <Component
      {...rest}
      whileTap={{ scale: 0.97 }}
      transition={{
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      // Set a CSS variable `--shine` that we override for dark mode via Tailwind.
      // Tailwind JIT allows arbitrary properties like `dark:[--shine:...]` if enabled.
      className={cn(
        "group inline-flex items-center justify-center rounded-4xl relative overflow-hidden border border-secondary cursor-pointer text-sm",
        "font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        "[--shine:rgba(0,0,0,.66)] dark:[--shine:rgba(255,255,255,.66)]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {/* Text with shine mask */}
      <motion.span
        className="tracking-wide flex items-center justify-center h-full w-full relative z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
        initial={{ ["--mask-x" as any]: "100%" } as any}
        animate={{ ["--mask-x" as any]: "-100%" } as any}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine effect uses the --shine variable so it adapts to theme */}
      <motion.span
        className="block absolute inset-0 rounded-4xl p-px"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
    </Component>
  );
};

export default AnimatedButton;
