import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Stanley Christian Darmawan.
        </p>
      </div>
    </footer>
  );
}
