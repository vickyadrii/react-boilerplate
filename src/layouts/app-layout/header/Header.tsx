import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { removeAccessToken } from "@/lib/authStorage";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Logout from "./Logout";
import { useEffect, useState } from "react";

type Props = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    removeAccessToken();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("user-data");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-20 bg-white border-b">
      <div className="flex items-center justify-between px-4 py-2 lg:justify-end">
        {/* Hamburger button (mobile only) */}
        <button onClick={onToggleSidebar} className="lg:hidden text-gray-700 focus:outline-none">
          <img src="/assets/icons/ic_menu.svg" alt="menu" className="w-6 h-6" />
        </button>

        {/* User info */}
        <Popover>
          <PopoverTrigger>
            <div className="px-4 py-2.5 flex items-center gap-2 hover:bg-gray-100">
              <div className="flex flex-col items-start">
                <p className="text-sm font-extrabold">Halo, selamat datang!</p>
                <span className="text-xs text-gray-500 font-semibold">{username}</span>
              </div>
              <img src="/assets/icons/ic_arrow-top.svg" alt="ic_arrow-top" className="rotate-180" />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="flex w-fit p-2">
            <Logout onLogout={handleLogout} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
