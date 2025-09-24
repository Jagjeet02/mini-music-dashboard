"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Upload Track", href: "/dashboard/track/upload" },
    { name: "Logout", href: "/login" },
  ];

  return (
    <aside className="aside">
      <nav className="space-y-2">
        {links.map((link) => {
          return(
                <Link
            key={link.name}
            href={link.href}
            className={`li ${
              pathname === link.href
                ? "primary-btn"
                : "passive"
            }`}
          >
            {link.name}
          </Link>
          )
})}
      </nav>
    </aside>
  );
}
