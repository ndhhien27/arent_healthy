import React from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/button';
import LayoutContainer from '@/components/layout-container';
import { StorageKey } from '@/constants';
import { login } from '@/services/auth';

function Login() {
  const { mutate } = useMutation('LOGIN', login, {
    onSuccess: () => {
      sessionStorage.setItem(StorageKey.IsAuthenticated, 'true');
      window.location.href = '/';
    },
  });

  const handleLogin = () => mutate();
  return (
    <LayoutContainer>
      <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <Button onClick={handleLogin} label="Press to Login!" />
      </div>
    </LayoutContainer>
  );
}

export default Login;
