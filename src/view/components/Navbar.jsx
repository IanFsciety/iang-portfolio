import { Logo } from "./Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">

      <div className="flex flex-shrink-0 items-center">
        <Logo />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ian-gabriel-727a14286/"><FaLinkedin /></a>
        <a href="https://github.com/IanFsciety"><FaGithub /></a>
      </div>

    </nav>
  );
}