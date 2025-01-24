import { Heart, Home, Library, Search } from 'lucide-react';

const NavLinks = [
    {
        name: 'Home',
        href: '/home',
        icons: Home,
    },
    {
        name: 'Search',
        href: '/search',
        icons: Search,
    },
    {
        name: 'Albums',
        href: '/album',
        icons: Library,
    },
    {
        name: 'Favorites',
        href: '/favorites',
        icons: Heart,
    },
];

export default NavLinks;
