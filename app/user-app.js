var React       = require('react/addons'),
    UserApp     = require('./handlers/user'),
    mountNode   = document.getElementById("react-main-mount");

React.render(<UserApp/>, mountNode);
