import { Component } from 'react';
import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

import Quote from './components/Quote';
import Footer from './components/Footer';
import getRandomQuote from './utils/getRandomQuote';
import throttle from './utils/throttle';

const { div } = hh(h);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Loading...',
      name: 'website',
    };

    const newQuoteFn = () => {
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
    };
    this.newQuote = throttle(newQuoteFn, 300);
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    const { text, name } = this.state;
    return div('.app', [
      h(Quote, {
        text,
        name,
        newQuote: this.newQuote,
      }),
      h(Footer),
    ]);
  }
}

export default App;
