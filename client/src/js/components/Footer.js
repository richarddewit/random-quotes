import h from 'react-hyperscript';
import hh from 'hyperscript-helpers';

const { footer } = hh(h);

const Footer = () => (
  footer(`© ${new Date().getFullYear()} Richard de Wit`)
);

export default Footer;
