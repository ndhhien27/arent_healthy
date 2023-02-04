import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="h-32 w-full bg-[#414141] flex items-center center mt-14">
      <Link to="/" className="mr-11">
        会員登録
      </Link>
      <Link to="/" className="mr-11">
        運営会社
      </Link>
      <Link to="/" className="mr-11">
        利用規約
      </Link>
      <Link to="/" className="mr-11">
        個人情報の取扱について
      </Link>
      <Link to="/" className="mr-11">
        特定商取引法に基づく表記
      </Link>
      <Link to="/" className="mr-11">
        お問い合わせ
      </Link>
    </div>
  );
}

export default Footer;
