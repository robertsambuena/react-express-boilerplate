var express     = require('express'),
    React       = require('react/addons'),
    router      = express(),
    AuthApp     = React.createFactory(require('../../app/handlers/auth')),
    StartName   = 'auth';

router.get('/', function (req, res) {
    var reactHtml = React.renderToString(<AuthApp/>);
    res.render('../server/views/index.ejs', {rederedHtml: reactHtml, bundleName: StartName});
});

router.post('/login', function (req, res) {
    console.log('login', req.body);
    if (req.body.un && req.body.pw) {
        // temporary login creds
        if (req.body.un === 'bert' && req.body.pw === '123') {
            console.log('if');
            return res.redirect('/dashboard');
        }
    }

    res.redirect('/auth?error=wrong_credentials');
});

module.exports = router;