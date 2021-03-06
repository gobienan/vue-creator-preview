<template>
  <div
    class="CreatorPreview--Wrap"
    :class="[{ 'is-light': mode === 'light' }, { 'is-dark': mode === 'dark' }]"
  >
    <span class="CreatorPreview--Link" v-html="name" ref="creatorLink" @mouseover="showPreview" />
    <div class="CreatorPreview" ref="creatorPreview" v-click-outside="hidePreview">
      <div class="CreatorPreview--Person">
        <img class="CreatorPreview--Avatar" :src="avatar" alt="Creator Avatar" />
        <div class="CreatorPreview--Name--Wrap">
          <p class="CreatorPreview--Name" v-html="name" />
          <p class="CreatorPreview--Description" v-html="description" />
        </div>
      </div>
      <p class="CreatorPreview--Content" v-if="content" v-html="content" />
    </div>
  </div>
</template>
<script>
import anime from 'animejs';
import ClickOutside from 'vue-click-outside';
const OFFSET = 20;
const isMobile = window.innerWidth < 500;

export default {
  props: {
    avatar: {
      type: String,
      default: 'https://source.boringavatars.com/beam/90/',
    },
    name: {
      type: String,
      default: 'Creator',
    },
    description: {
      type: String,
      default: 'Developer, Founder',
    },
    content: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'light',
      validator: function (value) {
        // The value must match one of these strings
        return ['light', 'dark'].indexOf(value) !== -1;
      },
    },
  },
  directives: {
    ClickOutside,
  },
  methods: {
    showPreview() {
      const element = this.$refs.creatorPreview;
      if (element.classList.contains('is-visible')) return;
      element.classList.add('is-visible');
      const { y, x, width: linkWidth } = this.$refs.creatorLink.getBoundingClientRect();
      const { width: elementWidth } = element.getBoundingClientRect();
      anime({
        targets: element,
        left: isMobile
          ? ['50%', '50%']
          : [x - (elementWidth - linkWidth) / 2, x - (elementWidth - linkWidth) / 2],
        bottom: window.innerHeight - y + OFFSET,
        translateY: ['20%', 0],
        translateX: isMobile ? ['-50%', '-50%'] : 0,
        opacity: [0, 1],
        easing: 'spring(1, 80, 12, 4)',
      });
    },
    hidePreview() {
      const element = this.$refs.creatorPreview;
      if (!element.classList.contains('is-visible')) return;
      element.classList.remove('is-visible');
      const { y, x, width: linkWidth } = this.$refs.creatorLink.getBoundingClientRect();
      const { width: elementWidth } = element.getBoundingClientRect();
      anime({
        targets: this.$refs.creatorPreview,
        left: isMobile
          ? ['50%', '50%']
          : [x - (elementWidth - linkWidth) / 2, x - (elementWidth - linkWidth) / 2],
        bottom: window.innerHeight - y + OFFSET,
        translateY: [0, '20%'],
        translateX: isMobile ? ['-50%', '-50%'] : 0,
        opacity: [1, 0],
        easing: 'spring(1, 80, 10, 4)',
      });
    },
  },
};
</script>
<style lang="scss">
.CreatorPreview--Wrap {
  position: relative;
  display: inline;
  text-align: left;

  &.is-dark {
    .CreatorPreview {
      background-color: rgb(32, 32, 32);

      * {
        color: white;
      }
    }
  }

  .CreatorPreview {
    width: clamp(250px, 30vw, 360px);
    opacity: 0;
    z-index: 1;
    position: fixed;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 60px 0 rgba(black, 0.15);
    will-change: auto;
    left: 0;
    bottom: 0;
    opacity: 0;
    padding: 20px;
    pointer-events: none;
    color: black;

    > * {
      will-change: auto;
    }

    &.is-visible {
      pointer-events: all;
    }

    .CreatorPreview--Person {
      display: flex;
      align-items: center;
    }

    .CreatorPreview--Name--Wrap {
      flex: 1;
    }

    .CreatorPreview--Avatar {
      border-radius: 50px;
      overflow: hidden;
      display: block;
      height: 90px;
      width: 90px;
      margin: 0 10px 0 0;
      border: solid 4px rgba(black, 0.2);
    }

    .CreatorPreview--Name {
      font-size: 1rem;
      font-weight: bold;
      grid-area: name;
      margin: 0 0 10px;
      line-height: 1.25;
    }

    .CreatorPreview--Description {
      font-size: 0.85rem;
      margin: 0;
      line-height: 1.25;
    }

    .CreatorPreview--Content {
      font-size: 0.85rem;
      margin-top: 20px;
    }

    .CreatorPreview--Link {
      text-decoration: underline;
    }
  }
}
</style>
