import { Component, PropTypes } from 'react';
import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

const { div, button, i } = hh(h);

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.onTwitterButtonClick = this.onTwitterButtonClick.bind(this);

    this.buttons = [
      {
        icon: 'refresh',
        text: 'New',
        onClick: this.onNewButtonClick,
      },
      {
        icon: 'twitter',
        text: 'Tweet',
        onClick: this.onTwitterButtonClick,
      },
      {
        icon: 'user',
        text: 'It was me!',
        onClick: props.toggleEditing,
      },
    ];
  }

  onNewButtonClick() {}

  onTwitterButtonClick() {
    // Share on Twitter
    const { text, name } = this.props;
    const body = `"${text}"\n- ${name}\n\n${window.location}`;
    if (body.length > 140) {
      console.warn('Quote too big for Tweet');
    }
    const encodedBody = encodeURIComponent(body);
    const url = `https://twitter.com/home?status=${encodedBody}`;
    window.open(url, '_blank');
  }

  render() {
    return (
      div('.buttons', this.buttons.map(btn => (
        button({ onClick: btn.onClick }, [
          i(`.icon-left.fa.fa-${btn.icon}`),
          btn.text,
        ])
      )))
    );
  }
}

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};

export default Buttons;
