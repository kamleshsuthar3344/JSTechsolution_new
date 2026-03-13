import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') return null;

    return (
        <nav className="bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
            <div className="max-w-7xl mx-auto">
                <ol className="flex items-center space-x-2 text-sm">
                    <li className="flex items-center">
                        <Link to="/" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center">
                            <Home className="h-4 w-4 mr-1" />
                            <span className="hidden sm:inline">Home</span>
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const label = value.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

                        return (
                            <li key={to} className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1 flex-shrink-0" />
                                {last ? (
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap">
                                        {label}
                                    </span>
                                ) : (
                                    <Link to={to} className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors whitespace-nowrap">
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
