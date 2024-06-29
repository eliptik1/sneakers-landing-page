export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between text-[#78350F] px-20 py-6">
        <div className="font-bold text-[32px]">Collers</div>
        <div className="flex gap-4 font-medium [&_a]:px-2 [&_a]:py-3">
          <a href="#" className="">
            Products
          </a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Log in</a>
          <a href="#" className="border-current border-2 rounded-lg">
            Sign up now
          </a>
        </div>
      </nav>
    </header>
  );
};
