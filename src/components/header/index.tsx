import classNames from 'classnames';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import appLogo from '@/assets/svg/app_logo.svg';
import challengeIcon from '@/assets/svg/icon_challenge.svg';
import menuClose from '@/assets/svg/icon_close.svg';
import infoIcon from '@/assets/svg/icon_info.svg';
import memoIcon from '@/assets/svg/icon_memo.svg';
import menuIcon from '@/assets/svg/icon_menu.svg';
import { StorageKey } from '@/constants';

import BadgeIcon from '../badge-icon';
import Dropdown from '../dropdown';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    {
      label: '自分の記録',
      path: '/my-profile',
    },
    {
      label: '体重グラフ',
      path: '/',
    },
    {
      label: '目標',
      path: '/',
    },
    {
      label: '選択中のコース',
      path: '/',
    },
    {
      label: 'コラム一覧',
      path: '/column',
    },
    {
      label: '設定',
      path: '/',
    },
  ];

  return (
    <div className="bg-[#414141] h-16 flex items-center w-full justify-between center">
      <Link to="/">
        <img src={appLogo} alt="" className="h-10" />
      </Link>
      <div className="flex items-center">
        <NavLink
          to="/my-profile"
          className={({ isActive, isPending }) => {
            const statusClass: string = isActive
              ? 'text-primary'
              : isPending
              ? 'pending'
              : '';
            return classNames('flex items-center ml-8', statusClass);
          }}
        >
          <BadgeIcon icon={memoIcon} />
          自分の記録
        </NavLink>
        <NavLink
          to="/challenge"
          className={({ isActive, isPending }) => {
            const statusClass: string = isActive
              ? 'text-primary'
              : isPending
              ? 'pending'
              : '';
            return classNames('flex items-center ml-8', statusClass);
          }}
        >
          <BadgeIcon icon={challengeIcon} />
          チャレンジ
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive, isPending }) => {
            const statusClass: string = isActive
              ? 'text-primary'
              : isPending
              ? 'pending'
              : '';
            return classNames('flex items-center ml-8', statusClass);
          }}
        >
          <BadgeIcon icon={infoIcon} badgeNumber={1} />
          お知らせ
        </NavLink>
        {!sessionStorage.getItem(StorageKey.IsAuthenticated) ? (
          <NavLink to="/login" className="ml-8">
            Login
          </NavLink>
        ) : (
          <button
            onClick={() => {
              sessionStorage.removeItem(StorageKey.IsAuthenticated);
              window.location.href = '/login';
            }}
            className="ml-8 text-white hover:text-primary"
          >
            Logout
          </button>
        )}
        <Dropdown menuItems={menuItems} isOpen={isMenuOpen} onHide={toggleMenu}>
          <button onClick={toggleMenu}>
            <img src={isMenuOpen ? menuClose : menuIcon} alt="" className="h-6" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
