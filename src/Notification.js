import React, { useState } from 'react';

const Notification = () => {
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission);
      });
    }
  };

  const showNotification = () => {
    if (notificationPermission === 'granted') {
      new Notification('New User Added', {
        body: 'A new user has been added to the system',
      });
    }
  };

  return (
    <div>
      <h1>Notification Example</h1>
      <p>Notification permission: {notificationPermission}</p>
      <button onClick={requestNotificationPermission}>Request Permission</button>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
};

export default Notification;
