import Row from './row';
import Col from './col';

const components = [
  Row,
  Col,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Row,
  Col,
};

export {
  Row,
  Col,
};
