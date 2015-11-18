var Github = React.createClass({
  getInitialState: function () {
    return {
      username: 'jcenturion'
    };
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this._onChange}></input>
        <button onClick={this._onClick}>Show Repositories</button>

        <Repositories ref="repositories" />
      </div>
    );
  },
  _onChange: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  _onClick: function () {
    var url = 'https://api.github.com/users/' + this.state.username + '/repos';

    $.get(url)
      .then(function (data) {
        this.refs.repositories.setState({
          repositories: data
        });
      }.bind(this));
  }
});
