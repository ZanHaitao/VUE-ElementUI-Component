<template>
  <div :class="['el-row',classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      defalut: 0,
    },
    type: String,
    justify: {
      type: String,
      defalut: 'start',
      validator: (val) => ['start', 'center', 'end', 'space-around', 'space-between'].includes(
        val,
      ),
    },
    align: {
      tyep: String,
      defalut: 'top',
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
        classList.push('el-row-flex');
        if (this.justify && this.justify !== 'start') {
          classList.push(`el-row-flex-justify-${this.justify}`);
        }
        if (this.align && this.align !== 'top') {
          classList.push(`el-row-flex-align-${this.align}`);
        }
      }

      return classList;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: "";
  }

  &::after {
    clear: both;
  }

  &.el-row-flex {
    display: flex;

    &::after,
    &::before {
      display: none;
    }

    &.el-row-flex-justify-end {
      justify-content: flex-end;
    }

    &.el-row-flex-justify-center {
      justify-content: center;
    }

    &.el-row-flex-justify-space-around {
      justify-content: space-around;
    }

    &.el-row-flex-justify-space-between {
      justify-content: space-between;
    }

    &.el-row-flex-align-bottom {
      align-items: flex-end;
    }

    &.el-row-flex-align-middle {
      align-items: center;
    }
  }
}
</style>
