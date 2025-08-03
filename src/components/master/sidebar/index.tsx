type SidebarProps = {
  onSelect: (page: string) => void;
  activePage: string;
};

const Sidebar = ({ onSelect, activePage }: SidebarProps) => {
  const pages = ["Dashboard", "Products","Profile"];

  return (
    <aside className="w-64 p-4 bg-gray-700 text-white hidden md:block">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        {pages.map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className={`cursor-pointer px-2 py-1 rounded ${
              activePage === item
                ? "bg-gray-900 font-semibold"
                : "hover:bg-gray-600"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
