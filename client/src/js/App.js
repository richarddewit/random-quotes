import { Component } from 'react';
import h from 'react-hyperscript';

import Quote from './components/Quote';
import getRandomQuote from './utils/getRandomQuote';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Loading...',
      name: 'website',
    };
  }

  componentDidMount() {
    getRandomQuote()
      .then(quote => {
        const { text, name } = quote;
        this.setState({ text, name });
      })
      .catch(err => {
        this.setState({
          text: err,
          name: 'website',
        });
        console.error(err);
      });
  }

  render() {
    const { text, name } = this.state;
    return h(Quote, { text, name });
  }
}

export default App;
