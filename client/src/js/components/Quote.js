import { Component, PropTypes } from 'react';
import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

import Buttons from './Buttons';

const { div, h1, h2 } = hh(h);

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ name: newProps.name });
  }

  render() {
    const { text } = this.props;
    const { name } = this.state;
    return (
      div('.quote', [
        h1([text]),
        h2([name]),
        h(Buttons, { text, name }),
      ])
    );
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quote;
