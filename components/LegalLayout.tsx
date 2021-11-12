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
        <h1>利用規約用ヘッダー</h1>
        <button onClick={toggleMenu}>ボタン開閉</button>
        {isOpen && (
          <div className="shadow rounded p-4 bg-red-200">
            メニュー開いています
          </div>
        )}
        <Link href="/">
          <a>トップに戻る</a>
        </Link>
      </header>
      <main className="col-span-2">{children}</main>
    </div>
  );
};

export default Layout;
