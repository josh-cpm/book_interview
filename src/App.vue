<template>
  <div class="app-container-overflow">
    <div class="main-app-container">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
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
};
</script>

<style>
:root {
  /* @import url(`https://fonts.googleapis.com/css2?family=Roboto&display=swap`); */

  --color-text-main: black;
  --color-text-gray: #716f6f;
  --color-primary: #7258f6;
  --color-primary-bg: #e3deff;
  --color-gray-bg: #f1efef;
  --font-family-primary: 'Roboto', sans-serif;
  --font-size-p: 1rem;
  --font-size-small: 0.75rem;
  /* --font-size-tiny: 0.6rem; */
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

.main-app-container {
  max-width: 550px;
  margin: auto;
}
</style>
