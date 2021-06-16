<script>
import Vue from 'vue';
import VueCreatorPreview from '@/vue-creator-preview.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueCreatorPreview,
  },
  data() {
    return {
      avatar: 'https://pbs.twimg.com/profile_images/1375758751450415104/hV9bKmvf_400x400.jpg',
      name: `Gobie Nanthakumar`,
      description: `Engineer with a passion for UI design`,
      content: `Hey, I am Gobie 👋<br/>
If you don’t know me, I love to create products with great UI ;)<br/><br/>
Click on the link to visit my website 👇🏾`,
    };
  },
});
</script>

<template>
  <div id="app">
    <h1>Landing Page</h1>
    <div class="SiteFooter">
      <span> Crafted for people who love to keep things simple. </span>
      <span>
        A product by
        <a href="https://gobienan.com" target="_blank">
          <vue-creator-preview
            :avatar="avatar"
            :name="name"
            :description="description"
            :content="content"
          />
        </a>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(26, 26, 26);

  h1 {
    font-size: clamp(3.75rem, 8vw, 10rem);
    margin: 0;
  }
}
.SiteFooter {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  font-size: rem(16px);

  @media screen and (max-width: breakpoint(tablet-portrait)) {
    padding-bottom: 50px;
    text-align: left;
    align-items: flex-start;
    padding: 20px;
  }

  p {
    font-size: rem(16px);
  }

  span {
    line-height: 1.5;
  }
}
</style>
