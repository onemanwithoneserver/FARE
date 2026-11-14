import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  GraduationCap,
  BookOpen,
  Menu,
  Landmark,
  ShieldCheck,
  Target,
  FileText,
  Zap,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import {
  sidebarSections,
  defaultTenant,
  availableTenants,
  type TenantInfo,
} from "./data";
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";

export interface DesktopSidebarProps {
  activeItem?: string;
  activeSubItem?: string;
  onSelectItem?: (itemId: string, subItemId?: string) => void;
  className?: string;
}

export default function DesktopSidebar({
  activeItem = "courses",
  activeSubItem,
  onSelectItem,
  className = "",
}: DesktopSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentMode = location.pathname.startsWith("/mobile") ? "mobile" : "desktop";
  const [selectedTenant, setSelectedTenant] = useState<TenantInfo>(defaultTenant);
  const [isTenantMenuOpen, setIsTenantMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    [activeItem]: true,
  });

  const toggleExpand = (itemId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const renderIcon = (icon: string) => {
    const props = { className: "w-4 h-4 shrink-0" };
    switch (icon) {
      case "LayoutGrid":
        return <LayoutGrid {...props} />;
      case "GraduationCap":
        return <GraduationCap {...props} />;
      case "BookOpen":
        return <BookOpen {...props} />;
      case "Menu":
        return <Menu {...props} />;
      case "Landmark":
        return <Landmark {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Target":
        return <Target {...props} />;
      case "FileText":
        return <FileText {...props} />;
      case "Zap":
        return <Zap {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      default:
        return <BookOpen {...props} />;
    }
  };

  const handleItemClick = (id: string, hasSubItems?: boolean) => {
    if (hasSubItems) {
      setExpandedItems((prev) => ({ ...prev, [id]: true }));
    }
    if (onSelectItem) {
      onSelectItem(id);
    }
    navigate(`/${currentMode}/dashboard/${id}`);
  };

  const handleSubItemClick = (parentId: string, subId: string) => {
    if (onSelectItem) {
      onSelectItem(parentId, subId);
    }
    navigate(`/${currentMode}/dashboard/${parentId}?sub=${subId}`);
  };

  return (
    <aside
      className={`w-[230px] xl:w-[240px] bg-[#0B1D3A] text-slate-300 flex flex-col justify-between shrink-0 border-r border-[#15315C]/60 py-4 h-full overflow-y-auto font-['Outfit'] select-none z-30 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      <div className="flex flex-col gap-5 px-4">
        {/* FARE Logo Badge */}
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-xl p-2 w-11 h-11 flex items-center justify-center shadow-[0_4px_14px_rgba(11,29,58,0.2)]">
            <img
              src={trimmedLogo}
              alt="FARE Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tenant / Organization Switcher */}
        <div className="relative">
          <div
            onClick={() => setIsTenantMenuOpen(!isTenantMenuOpen)}
            className="flex items-center justify-between px-3 py-2.5 rounded-[8px] bg-[#132544] border border-[#1D355F] cursor-pointer hover:bg-[#182F57] hover:border-[#C99A2E]/40 transition-all duration-200 shadow-2xs group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-full bg-[#0B1D3A] border border-[#C99A2E]/50 flex items-center justify-center text-[10px] font-bold text-[#D5AA45] shrink-0">
                {selectedTenant.avatarText}
              </div>
              <span className="text-[13px] font-bold text-[#D5AA45] truncate">
                {selectedTenant.name}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
          </div>

          {/* Tenant Dropdown Menu */}
          {isTenantMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#101F3C] border border-[#1B2F56] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.5)] py-1 z-50">
              {availableTenants.map((tenant) => (
                <div
                  key={tenant.id}
                  onClick={() => {
                    setSelectedTenant(tenant);
                    setIsTenantMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs flex items-center gap-2 cursor-pointer hover:bg-[#15284B] transition-colors ${
                    selectedTenant.id === tenant.id
                      ? "text-[#D5AA45] font-bold bg-[#142646]"
                      : "text-slate-300 font-medium"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                    {tenant.avatarText}
                  </div>
                  <span>{tenant.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Sections */}
        <nav className="flex flex-col gap-3 mt-1">
          {sidebarSections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              {section.title && (
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C99A2E]/80 px-3 pt-2 pb-0.5">
                  {section.title}
                </div>
              )}
              {section.items.map((item) => {
                const isActive = activeItem === item.id;
                const isExpanded = expandedItems[item.id] ?? isActive;
                return (
                  <div key={item.id} className="flex flex-col">
                    <div
                      onClick={() => handleItemClick(item.id, Boolean(item.subItems?.length))}
                      className={`flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] font-medium cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "bg-[#142646] text-[#D5AA45] font-semibold shadow-[0_4px_14px_rgba(11,29,58,0.4)] border-l-2 border-[#D5AA45]"
                          : "text-slate-300 hover:text-white hover:bg-[#11213D]/70"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {renderIcon(item.icon)}
                        <span>{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {item.hasChevron && (
                          <button
                            type="button"
                            onClick={(e) => toggleExpand(item.id, e)}
                            className="p-0.5 hover:text-white rounded cursor-pointer"
                            title={isExpanded ? "Collapse" : "Expand"}
                          >
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-[#D5AA45]" : "text-slate-400"
                              }`}
                            />
                          </button>
                        )}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5AA45] shadow-[0_0_8px_#D5AA45]" />
                        )}
                      </div>
                    </div>

                    {/* Expandable Sub-Folder Controls */}
                    {item.subItems && isExpanded && (
                      <div className="flex flex-col ml-5 pl-2.5 border-l border-[#1B2F56]/80 gap-0.5 my-1 animate-in fade-in duration-150">
                        {item.subItems.map((sub, sIdx) => {
                          const isSubActive =
                            activeSubItem === sub.id ||
                            (!activeSubItem && isActive && sIdx === 0) ||
                            (activeSubItem === "courses" && sub.id === "all-courses");
                          return (
                            <div
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubItemClick(item.id, sub.id);
                              }}
                              className={`flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-xs font-medium cursor-pointer transition-colors ${
                                isSubActive
                                  ? "text-[#D5AA45] font-bold bg-[#142646]/90"
                                  : "text-slate-400 hover:text-slate-200 hover:bg-[#111E36]/40"
                              }`}
                            >
                              <span>{sub.label}</span>
                              {isSubActive && (
                                <span className="w-1 h-1 rounded-full bg-[#D5AA45]" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Sidebar Bottom Footer */}
      <div className="px-4 pt-4 border-t border-[#15315C]/60">
        <div
          onClick={() => alert("Signing out...")}
          className="flex items-center justify-between px-2 py-2 text-[13px] font-medium text-slate-400 hover:text-white cursor-pointer rounded-[8px] hover:bg-[#11213D]/70 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#132544] border border-[#1D355F] text-[#D5AA45] flex items-center justify-center text-[11px] font-bold">
              N
            </div>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
