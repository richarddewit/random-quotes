import { Component, PropTypes } from 'react';
import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

import Buttons from './Buttons';

const { div, h1, h2, input } = hh(h);

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      isEditing: false,
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ name: newProps.name });
  }

  onKeyUp(event) {
    if (event.keyCode === 13) { // Accept on Return
      this.toggleEditing();
    } else if (event.keyCode === 27) { // Cancel on Escape
      this.input.value = '';
      this.toggleEditing();
    }
  }

  toggleEditing() {
    const nextState = !this.state.isEditing;
    if (!nextState) {
      const name = this.input ? this.input.value : null;
      if (name)
        this.setState({ name });
    }
    this.setState({ isEditing: nextState });

  }

  render() {
    const { text } = this.props;
    const { name, isEditing } = this.state;
    return (
      div('.quote', [
        h1([text]),

        h2([
          isEditing ? input('.name', {
            ref: i => this.input = i,
            type: 'text',
            placeholder: name,
            autoFocus: true,
            onKeyUp: this.onKeyUp,
          }) : name
        ]),

        h(Buttons, { text, name, toggleEditing: this.toggleEditing }),
      ])
    );
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quote;
