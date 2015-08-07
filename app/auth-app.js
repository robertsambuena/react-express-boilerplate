var React       = require('react/addons'),
    AuthApp     = require('./handlers/auth'),
    mountNode   = document.getElementById("react-main-mount");

React.render(<AuthApp/>, mountNode);
