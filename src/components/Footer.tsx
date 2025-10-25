import { personalData } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md text-gray-300 py-10">
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {" "}
        <a href="https://heapreaper.nl" target="_blank" className="underline">
          {personalData.name}
        </a>. All rights reserved.
      </div>
    </footer>
  );
}
