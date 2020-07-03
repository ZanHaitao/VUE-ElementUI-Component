export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'center', 'end', 'space-around', 'space-between'].includes(
        val,
      ),
    },
    align: {
      tyep: String,
      default: 'top',
      validator: (val) => ['top', 'bottom', 'center'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      const { gutter } = this;
      if (gutter) {
        style.marginLeft = `${-gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }

      return style;
    },
    classList() {
      const classList = [];

      if (this.type === 'flex') {
        classList.push('el-row--flex');
        if (this.justify && this.justify !== 'start') {
          classList.push(`is-justify-${this.justify}`);
        }
        if (this.align && this.align !== 'top') {
          classList.push(`is-align-${this.align}`);
        }
      }

      return classList;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-row', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
