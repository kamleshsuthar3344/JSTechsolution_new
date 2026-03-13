import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, Users, Settings, Briefcase, Phone, CreditCard, Moon, Sun, ChevronDown, Search, ShoppingBag, Megaphone, Link as LinkIcon, Layout, Monitor, Smartphone, BookOpen, MessageCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

type DropdownItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  description: string;
};

const servicesDropdown: DropdownItem[] = [
  {
    name: "Website Development",
    href: "/website-development",
    icon: <Monitor className="h-5 w-5" />,
    description: "Custom websites for your business"
  },
  {
    name: "Digital Marketing",
    href: "/digital-marketing",
    icon: <Megaphone className="h-5 w-5" />,
    description: "Grow your online presence"
  },
  {
    name: "Shopify Website",
    href: "/shopify-development",
    icon: <ShoppingBag className="h-5 w-5" />,
    description: "E-commerce store setup"
  },
  {
    name: "Wordpress Website",
    href: "/wordpress-development",
    icon: <Layout className="h-5 w-5" />,
    description: "Flexible CMS solutions"
  },
  {
    name: "UI/UX Design",
    href: "/ui-ux-design",
    icon: <Smartphone className="h-5 w-5" />,
    description: "User-centered design"
  },
  {
    name: "WhatsApp Business API",
    href: "/whatsapp-business-api",
    icon: <MessageCircle className="h-5 w-5" />,
    description: "Official WhatsApp Solutions"
  },
  {
    name: "Backlink Services",
    href: "/backlink",
    icon: <LinkIcon className="h-5 w-5" />,
    description: "High-quality link building"
  },
  {
    name: "SEO Services",
    href: "/seo-services",
    icon: <Search className="h-5 w-5" />,
    description: "Rank #1 on Google"
  }
];

const primaryNav: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-3.5 w-3.5" />
  },
  {
    name: "About",
    href: "/about",
    icon: <Users className="h-3.5 w-3.5" />
  },
  {
    name: "Services",
    href: "/services",
    icon: <Settings className="h-3.5 w-3.5" />,
    hasDropdown: true,
    dropdownItems: servicesDropdown
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <Briefcase className="h-3.5 w-3.5" />
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: <CreditCard className="h-3.5 w-3.5" />
  },
  {
    name: "Careers",
    href: "/careers",
    icon: <Users className="h-3.5 w-3.5" />
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <Megaphone className="h-3.5 w-3.5" />
  },
  {
    name: "Academy",
    href: "/digital-academy",
    icon: <BookOpen className="h-3.5 w-3.5" />
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <Phone className="h-3.5 w-3.5" />
  },
];

// Desktop-only navigation: combine Careers + Academy into a single "More" dropdown
const desktopNav: NavItem[] = primaryNav
  .filter((item) => item.name !== 'Careers' && item.name !== 'Academy')
  .concat({
    name: 'More',
    href: '/careers',
    icon: <ChevronDown className="h-3.5 w-3.5" />,
    hasDropdown: true,
    dropdownItems: [
      { name: 'Careers', href: '/careers', icon: <Users className="h-5 w-5" />, description: 'Join our team' },
      { name: 'Digital Academy', href: '/digital-academy', icon: <BookOpen className="h-5 w-5" />, description: 'Learn digital skills' },
    ]
  });

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  }, [location.pathname]);


  const compactLinkBase = "px-1.5 py-1 rounded-md font-medium transition-all duration-300 flex items-center gap-1 text-xs lg:px-3 lg:py-3 lg:gap-2.5 lg:text-[17px]";

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${compactLinkBase} bg-gradient-to-r from-orange-100 via-rose-100 to-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm active:scale-95`
      : `${compactLinkBase} ${isDark ? 'text-gray-300 hover:bg-slate-800 hover:text-orange-400' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'} transition-all duration-200`;
  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg bg-white' : 'py-3 sun-glow bg-transparent'}`}>


      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-14">
          {/* Brand Logo */}
          <div className="flex items-center flex-shrink-0 mr-0.5">
            <Link to="/" className="flex items-center gap-2 group relative" aria-label="JS TECH SOLUTION Home">
              {/* Logo Image */}
              <img
                src="/logo.png"
                alt="JS TECH SOLUTION Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
              {/* Brand Text */}
              <span
                className="text-xl sm:text-[24px] font-black uppercase tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-700 drop-shadow-md"
                style={{
                  fontFamily: '"Montserrat", "Inter", sans-serif',
                  lineHeight: '1.2',
                }}
              >
                JS TECH SOLUTION
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 justify-center flex-1">
            {desktopNav.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.href}
                    className={() =>
                      // Check if any child route is active for parent highlighting
                      item.dropdownItems?.some(sub => sub.href === location.pathname)
                        ? `${compactLinkBase} bg-orange-600 text-white shadow-lg transform scale-105`
                        : `${compactLinkBase} ${isDark ? 'text-gray-300 hover:bg-slate-800 hover:text-orange-400' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'} transition-all duration-200`
                    }
                  >
                    {item.icon}
                    <span className="font-semibold">{item.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </NavLink>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`rounded-2xl shadow-2xl border overflow-hidden ${isDark ? 'bg-slate-800 border-slate-600' : 'bg-white border-gray-200'} `}>
                      <div className="p-2">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.href}
                            className={`flex items-start gap-3 p-2 rounded-lg transition-all duration-200 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-blue-50'} `}
                          >
                            <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'} `}>
                              {dropItem.icon}
                            </div>
                            <div>
                              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} `}>{dropItem.name}</div>
                              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} `}>{dropItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={navClass}
                  end={item.href === "/"}
                >
                  {item.icon}
                  <span className="font-semibold">{item.name}</span>
                </NavLink>
              )
            ))}
          </div>

          {/* Desktop Controls (Theme) - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${isDark ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-8 w-8 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="h-8 w-8 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden fixed inset-x-0 top-20 bottom-0 h-[calc(100vh-5rem)] z-[100] overflow-y-auto backdrop-blur-xl border-t shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-900/95 border-slate-700/60' : 'bg-white/95 border-gray-200/60'}`}>
            <div className="px-4 pt-4 pb-8 space-y-2">
              {primaryNav.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${mobileDropdownOpen === item.name
                          ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                          } `}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileDropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mobile Dropdown Items */}
                      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === item.name ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 space-y-2 border-l-2 border-gray-100 dark:border-slate-700 ml-4">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50"
                            >
                              <div className="text-blue-500">
                                {dropItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold">{dropItem.name}</span>
                                <span className="text-xs opacity-70 leading-tight">{dropItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isActive
                          ? "bg-orange-600 text-white shadow-md active:scale-95"
                          : "text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-slate-800"
                        } `
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile Bottom Controls (Theme Only) */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center gap-2 p-4 rounded-xl font-bold transition-all duration-300 ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
                >
                  {isDark ? (
                    <>
                      <Sun className="h-5 w-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
