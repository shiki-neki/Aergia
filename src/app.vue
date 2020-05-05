<template>
  <div>
    <header>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>This is the footer</footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'My cards',
        to: '/mycards'
      }
    ]
  })
}
</script>