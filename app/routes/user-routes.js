var React         = require('react/addons'),
    ReactRouter   = require('react-router'),
    DefaultRoute  = ReactRouter.DefaultRoute,
    Route         = ReactRouter.Route,
    NotFoundRoute = ReactRouter.NotFoundRoute,
    Redirect      = ReactRouter.Redirect,

    // handlers
    layout    = require('../layouts/userLayout'),
    home      = require('../handlers/home'),
    profile   = require('../handlers/profile'),
    notFound  = require('../handlers/notFound');

module.exports = function () {
    return (
        <Route handler={layout} path="/">
            <DefaultRoute handler={home} />
            <Route name="home" handler={home} />
            <Route name="profile" handler={profile} />
            <NotFoundRoute handler={notFound}/>
            <Redirect from="company" to="about" />
        </Route>
    );
};

