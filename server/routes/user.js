var express      = require('express'),
    React        = require('react/addons'),
    ReactRouter  = require('react-router'),
    router       = express(),
    getRoutes    = require('../../app/routes/user-routes'),
    appName      = 'user';

router.use(function(req, res, next) {

    ReactRouter.run(getRoutes(), function (Handler, state) {
        var reactHtml = React.renderToString(<Handler/>);
        console.log('reactHtml',reactHtml);
        return res.render('../server/views/index.ejs', {rederedHtml: reactHtml, bundleName: appName});
    });

});

module.exports = router;
