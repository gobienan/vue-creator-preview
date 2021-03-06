# vue-creator-preview

[![npm version](https://img.shields.io/npm/v/vue-creator-preview)](https://www.npmjs.org/package/vue-creator-preview)
[![install size](https://packagephobia.now.sh/badge?p=vue-creator-preview)](https://packagephobia.now.sh/result?p=vue-creator-preview)
[![npm downloads](https://img.shields.io/npm/dm/vue-creator-preview.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vue-creator-preview)

## Introduction

A preview component of the creator with more information on hover.
Checkout the <a target="_blank" href="https://7todos.com/"> Demo </a> here.

<p align="center">
    <img src="https://github.com/gobienan/vue-creator-preview/blob/master/assets/images/creator-preview.gif">
</p>

## Installation

#### Install using npm

```bash
# install it via npm
npm install vue-creator-preview --save
```

#### Install using yarn

```bash
# install it via yarn
yarn add vue-creator-preview
```

## Usage

```javascript
<template>
  <div class="Footer">
    <span>
      Crafted for people who love to keep things simple.
    </span>
    <span>
      A product by
      <a href="https://gobienan.com" target="_blank">
        <creator-preview
          :avatar="avatar"
          :name="name"
          :description="description"
          :content="content"
        />
      </a>
    </span>
  </div>
</template>

<script>
import CreatorPreview from 'vue-creator-preview.vue';
export default {
  components: {
      CreatorPreview
  },
  data() {
    return {
      avatar: 'https://pbs.twimg.com/profile_images/1375758751450415104/hV9bKmvf_400x400.jpg',
      name: `Gobie Nanthakumar`,
      description: `Engineer with a passion for UI design`,
      content: `Hey, I am Gobie π<br/>
If you donβt know me, I love to create products with great UI ;)<br/><br/>
Click on the link to visit my website ππΎ`,
    };
  },
};
</script>
```

## Options

Below are the options you can pass to the preview

| **Option**  | **Type**      | **Default**                                 | **Description**                                         |
| ----------- | ------------- | ------------------------------------------- | ------------------------------------------------------- |
| avatar      | String        | 'https://source.boringavatars.com/beam/90/' | URL of the avatar image you want to get displayed       |
| name        | String / HTML | 'Creator'                                   | Name of the Creator                                     |
| description | String / HTML | 'Developer, Founder'                        | Short description displayed below the name              |
| content     | String / HTML | ''                                          | 'Content with additional information about the creator' |
| mode        | String        | 'light'                                     | 'switch between `dark` and light `mode`'                |

## License

[MIT](http://opensource.org/licenses/MIT)
