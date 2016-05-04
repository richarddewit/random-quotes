import { Component, PropTypes } from 'react';
import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

const { div, button, i } = hh(h);

class Buttons extends Component {
  constructor(props) {
    super(props);


    this.buttons = [
      {
        icon: 'refresh',
        text: 'New',
        onClick: this.onNewButtonClick,
      },
      {
        icon: 'facebook',
        text: 'Share',
        onClick: this.onFacebookButtonClick,
      },
      {
        icon: 'twitter',
        text: 'Share',
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
  onFacebookButtonClick() {}
  onTwitterButtonClick() {}

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
