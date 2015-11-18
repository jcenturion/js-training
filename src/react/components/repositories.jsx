var Repositories = React.createClass({
  getInitialState: function () {
    return {
      repositories: []
    };
  },
  render : function () {
    var repositories = this.state.repositories.map(function (repo, i) {
      return (<li key={i}>{repo.name}</li>);
    });

    return (
      <ul>
        {repositories}
      </ul>
    );
  }
});
