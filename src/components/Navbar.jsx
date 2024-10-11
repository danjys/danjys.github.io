const sections = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];
  
const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 z-50">
        <ul className="flex justify-center space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-lg hover:text-blue-400 transition-colors"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Navbar;