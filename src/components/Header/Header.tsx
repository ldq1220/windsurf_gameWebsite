import Link from "next/link";

export default function Header() {
  // 定义通用链接样式 - 添加更丰富的悬停效果
  const linkStyles =
    "text-sm px-4 py-1.5 rounded-md font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-100 to-purple-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo 区域 */}
        <Link
          href="/"
          className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          NEXT.JS
        </Link>

        {/* 导航链接 */}
        <nav className="flex items-center gap-6">
          <Link href="/dashboard" className={linkStyles}>
            仪表盘
          </Link>
          <Link href="/news" className={linkStyles}>
            新闻
          </Link>
          <Link href="/about" className={linkStyles}>
            关于
          </Link>
          <button className="text-sm px-4 py-1.5 rounded-md font-medium text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 transition-colors">
            登录{" "}
          </button>
        </nav>
      </div>
    </header>
  );
}
