import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type SidebarProps = {
  onSelect: (page: string) => void;
  activePage: string;
};

const Sidebar = ({ onSelect, activePage }: SidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages = ["Dashboard", "Products", "Profile"];

  const handlePageSelect = (page: string) => {
    onSelect(page);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-100 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-lg transition-transform duration-300"
        style={{
          transform: isMobileMenuOpen ? 'translateX(256px)' : 'translateX(0)'
        }}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar
        w-64 p-4 bg-gray-700 text-white
        md:block md:relative md:translate-x-0
        fixed top-100 left-0 h-full z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* <div className="flex items-center justify-between mb-4 md:justify-start">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-1 hover:bg-gray-600 rounded"
          >
            <X size={16} />
          </button>
        </div> */}
        
        <ul className="space-y-2">
          {pages.map((item) => (
            <li
              key={item}
              onClick={() => handlePageSelect(item)}
              className={`cursor-pointer px-2 py-1 rounded transition-colors ${
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
    </>
  );
};

export default Sidebar;