import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <header className="border-b p-4 shadow bg-white">
        <h1>ヘッダー</h1>
        <button onClick={toggleMenu}>ボタン開閉</button>
        {isOpen && (
          <div className="shadow bg-white rounded p-4 bg-red-200">
            メニュー開いています
          </div>
        )}
      </header>
      <div className="grid grid-cols-3 gap-4 h-screen">
        <aside className="col-span-1 bg-gray-50 border-r">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className="block p-2">トップ</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block p-2">アバウト</a>
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  <a className="block p-2">利用規約</a>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="col-span-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
