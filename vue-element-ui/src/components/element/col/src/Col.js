export default {
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, String],
    sm: [Number, String],
    md: [Number, String],
    lg: [Number, String],
    xl: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    classList() {
      const classList = [];
      let flag = false;
      ['span', 'offset', 'pull', 'push'].forEach((prop) => {
        if (this[prop]) {
          if (prop === 'span') {
            classList.push(`el-col-${this[prop]}`);
          } else {
            classList.push(`el-col-${prop}-${this[prop]}`);
          }
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (!this[size]) {
          return;
        }
        flag = true;
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            if (prop === 'span') {
              classList.push(`el-col-${size}-${props[prop]}`);
            } else {
              classList.push(`el-col-${prop}-${props[prop]}`);
            }
          });
        }
      });
      if (flag) {
        classList.splice(0, 1);
      }
      return classList;
    },
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      const { gutter } = this;
      if (gutter) {
        style.paddingLeft = `${gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-col', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
