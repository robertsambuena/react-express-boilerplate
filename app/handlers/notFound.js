var React = require('react/addons'),

    NotFound = React.createClass({
        componentDidMount: function () {
            console.log('123!');
        },
        render: function () {
            return (
                <div id="table-area">
                    NOT FOUND BOYS
                </div>
            )
        }
    });

module.exports = NotFound;