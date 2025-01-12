if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.error('Service Worker Registration Failed:', err));
  }
  
  document.getElementById('notify-btn').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Push Notifications Enabled!', {
          body: 'You will now receive updates.',
          icon: '/images/icon.png'
        });
      }
    });
  });
  