/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StorageKey } from '@/constants';

interface WithAuthProps {}

function withAuth<T extends WithAuthProps = WithAuthProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  const AuthComponent = (props: Omit<T, keyof WithAuthProps>) => {
    const isLogin = sessionStorage.getItem(StorageKey.IsAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
      if (!isLogin) {
        navigate('/login');
      }
    }, [isLogin]);
    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
}

export default withAuth;
