<template>
  <div class="main-app-container">
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    Main,
    Footer,
  },
  //provide/inject
};
</script>

<style>
:root {
  /* @import url(`https://fonts.googleapis.com/css2?family=Roboto&display=swap`); */

  --color-text-main: black;
  --color-text-gray: #b0adad;
  --color-primary: #7258f6;
  --color-primary-bg: #e3deff;
  --color-gray-bg: #f1efef;
  --font-family-primary: 'Roboto', sans-serif;
  --font-size-p: 1rem;
  --margin-sides: 1rem;
  font-size: 20px;
}

* {
  font-family: var(--font-family-primary);
}

body {
  padding: 0;
  margin: 0;
}

h2 {
  font-weight: normal;
  margin: 0;
}
</style>
