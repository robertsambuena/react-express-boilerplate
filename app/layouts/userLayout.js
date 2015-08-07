var React = require('react'),
    ReactRouter = require('react-router'),
    RouteHandler = ReactRouter.RouteHandler;
    Link = ReactRouter.Link;

    UserLayout = React.createClass({
        componentDidMount: function () {
            console.log("EPIC ERROR");
        },
        render: function () {
            return (
                <div id="user">
                    <div className="topbar">TOPBAR</div><br/>
                    <div className="sidebar">
                        <Link className="" to="home">
                            Home
                        </Link>
                        <Link className="" to="profile">
                            Profile
                        </Link>
                    </div>
                    <RouteHandler/>
                    <div className="footer">FOOTER</div>
                </div>
            )
        }
    });

module.exports = UserLayout;