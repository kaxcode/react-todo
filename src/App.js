class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }
}

onChange = (event) => {
  this.setState({term: event.target.value});
}

<input value={this.state.term} onChange={this.onChange} />

export default App;