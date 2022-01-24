import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link href="/">
          <a style={{ color: router.pathname === "/" ? "red" : "green" }}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a style={{ color: router.pathname === "/about" ? "red" : "green" }}>
            About
          </a>
        </Link>
        <Link href="/search">
          <a style={{ color: router.pathname === "/Search" ? "red" : "green" }}>
            Search
          </a>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
