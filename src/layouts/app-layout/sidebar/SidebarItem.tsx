import type { SidebarItemType } from "@/types";
import { NavLink } from "react-router";

type Props = {
  title: string;
  href: string;
  icon?: string;
  children?: SidebarItemType[];
  onShowChildren?: () => void;
  showChildren?: boolean;
};

const SidebarItem = ({ title, href, icon, children, onShowChildren, showChildren }: Props) => {
  return children && children?.length > 0 ? (
    <button
      type="button"
      className="w-full p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-out"
      onClick={onShowChildren}
    >
      <div className="flex items-center gap-2">
        {<img src={icon} alt={`${title} icon`} />}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <img
        src="/assets/icons/ic_arrow-top.svg"
        alt="ic_arrow-top"
        className={`${showChildren ? "rotate-0" : "rotate-180"} transition-all duration-200 ease-out`}
      />
    </button>
  ) : (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          isActive ? "bg-gray-100" : "",
          "p-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-out",
        ].join(" ")
      }
    >
      {(!!icon && !children) || (!icon && children?.length === 0) ? <img src={icon} alt={`${title} icon`} /> : null}
      <span className="text-sm font-medium">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
