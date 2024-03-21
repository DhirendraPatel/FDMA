// MakeId.js

import React, { useEffect } from 'react';
import AccountSettings from './AccountSettings';
import UserAddress from './UserAddress';
import { useUser } from './UserContext';

const MakeId = () => {
  const { setUserId } = useUser();
  const userId = 3; // Replace with the actual user ID

  useEffect(() => {
    setUserId(userId);
  }, [setUserId, userId]);

  return (
    <>
      <AccountSettings />
      <UserAddress />
    </>
  );
};

export default MakeId;
