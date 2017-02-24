$.ajaxSetup({
    statusCode: {
        401: function () {
            // Redirec the to the login page.
            window.location.replace('#log-in');
        },
        403: function () {
            // 403 -- Access denied
            window.location.replace('#denied');
        },
        404: function () {
            // 403 -- Access denied
            window.location.replace('#not-found');
        }
    }
});