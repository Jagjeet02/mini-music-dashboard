import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
         <div className="footer-right">
          <div className="footer-logo">  <Image src="/logo.png" alt="logo" className="logo" width={200} height={70} /></div>
          <p>Bringing you the latest Punjabi hits and tracks dashboard.</p>
        </div>
          <div className="footer-links">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/track/upload">Upload</Link>
          <Link href="/dashboard">About</Link>
          <Link href="/dashboard">Contact</Link>
        </div>
       
      </div>

      <div className="footer-bottom">
        © 2025 Tune Suno. All rights reserved.
      </div>
    </footer>
  );
}
