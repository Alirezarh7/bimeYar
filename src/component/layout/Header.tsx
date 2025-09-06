export const Header = () => {
  return (
    <header className="w-full fixed hidden top-0 z-40 bg-white/70 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2 L20 7 L12 22 L4 7 Z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-primary">بیمه‌یار</span>
          <span className="text-xs text-gray-500 ml-2 hidden sm:inline">نمونه TypeScript + Vite</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-primary">
            خدمات
          </a>
          <a href="#compare" className="hover:text-primary">
            مقایسه
          </a>
          <a href="#seller" className="hover:text-primary">
            همکاری
          </a>
          <a href="#blog" className="hover:text-primary">
            وبلاگ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full bg-primary text-white shadow-sm hover:shadow-lg transition">ورود</button>
          <button className="px-4 py-2 rounded-full border border-primary text-primary bg-white">ثبت‌نام</button>
        </div>
      </div>
    </header>
  );
};
