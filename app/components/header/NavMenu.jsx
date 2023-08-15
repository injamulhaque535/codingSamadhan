import Link from "next/link";
import { usePathname } from "next/navigation";
const NavMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="navbar_wrapper">
        <nav>
          <ul className="navbar_list flex justify-end items-center gap-5">
            <li>
              <Link
                href="/"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/" ? "text-secondary" : "text-primary"
                } `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/services" ? "text-secondary" : "text-primary"
                } `}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio?page=1"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/portfolio" ? "text-secondary" : "text-primary"
                } `}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/blogs" ? "text-secondary" : "text-primary"
                } `}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/about" ? "text-secondary" : "text-primary"
                } `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/contact" ? "text-secondary" : "text-primary"
                } `}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`nav_link font-medium uppercase text-sm duration-300 hover:text-hover ${
                  pathname == "/support" ? "text-secondary" : "text-primary"
                } `}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
