import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCopyright,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-4 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="http://x.com/SalamSneha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandX className="size-6" />
          </a>
          <a
            href="http://linkedin.com/in/sneha-salam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandLinkedin className="size-6" />
          </a>
          <a
            href="http://facebook.com/snehasalam.12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandFacebook className="size-6" />
          </a>

          <a
            href="http://instagram.com/sneha.salam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandInstagram className="size-6" />
          </a>
        </div>
        <span className="text-muted-foreground flex justify-center max-sm:flex-col items-center gap-1 text-center text-sm">
          <div className="flex gap-1 justify-center items-center">
            <IconCopyright className="size-4 text-current" />
            {new Date().getFullYear()}
            <Link to="/" className="text-accent">
              Sneha Salam.
            </Link>
            All rights reserved.
          </div>
          <div>
            Developed by{" "}
            <a
              href="http://tech.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docufy Tech
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}
