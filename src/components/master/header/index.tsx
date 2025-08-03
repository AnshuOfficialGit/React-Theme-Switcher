import { useTheme } from "../../../context/ThemeContext";
import { Codesandbox } from "lucide-react";
const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center shadow"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
      }}
    >
      <h1 className="flex items-center gap-2 text-xl font-bold">
        <Codesandbox className="h-8 w-8 text-primary" />
        Logo
      </h1>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="px-3 py-1 rounded border bg-white text-black"
      >
        <option value="theme1">Theme 1 (Minimalist)</option>
        <option value="theme2">Theme 2 (Dark + Sidebar)</option>
        <option value="theme3">Theme 3 (Colorful)</option>
      </select>
    </header>
  );
};

export default Header;
