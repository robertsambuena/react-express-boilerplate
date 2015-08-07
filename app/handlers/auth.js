var React = require('react/addons'),
    AuthApp = React.createClass({
        componentDidMount: function () {
            console.log('LogiN!');
        },
        render: function () {
            return (
                <div id="login">
                    <form action='/auth/login' method='POST'>
                        <label>Username: <input name="un" type='text'/></label>
                        <label>Password: <input name="pw" type='password'/></label>
                        <input type='submit'/>
                    </form>
                </div>
            )
        }
    });

module.exports = AuthApp;