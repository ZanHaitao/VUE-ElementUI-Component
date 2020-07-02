<template>
  <div :class="['el-col',classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.el-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }

  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }

  .el-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }

  .el-col-pull-#{$i} {
    right: $i / 24 * 100%;
  }

  @media only screen and (max-width: 786px - 1) {
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }

    .el-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .el-col-xs-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .el-col-xs-pull-#{$i} {
      right: $i / 24 * 100%;
    }
  }

  @media only screen and (min-width: 786px) and (max-width: 992px - 1) {
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }

    .el-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .el-col-sm-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .el-col-sm-pull-#{$i} {
      right: $i / 24 * 100%;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px - 1) {
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }

    .el-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .el-col-md-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .el-col-md-pull-#{$i} {
      right: $i / 24 * 100%;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px - 1) {
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }

    .el-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .el-col-lg-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .el-col-lg-pull-#{$i} {
      right: $i / 24 * 100%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }

    .el-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }

    .el-col-xl-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }

    .el-col-xl-pull-#{$i} {
      right: $i / 24 * 100%;
    }
  }
}
</style>
