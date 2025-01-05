self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: '/icon.png',  // يمكنك تخصيص الأيقونة هنا
        badge: '/badge.png',  // إذا كنت تريد تخصيص الشارة
    };
    
    event.waitUntil(
        self.registration.showNotification('عنوان الإشعار', options)
    );
});
