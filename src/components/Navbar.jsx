const Navbar = () => {
    return (
        <div className="">
            {/* LOGO */}
            <div className="">
                <img src="/logo.png" className="w-8 h-8" alt="" /> 
                <span>fafo news</span>            
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">M</div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex">D</div>
        </div>
    );
};

export default Navbar;