<template>
  <div class="Jedi">
    <h1>{{ msg }}</h1>
    <p>
      The Jedi Order brings Peace, Justice, and Order to the Galaxy.<br>
      Despite Order 66, the Jedi are committed to help wherever possible. <br>
       See our exploits here:<br><br>
      <a href="https://youtu.be/Zq4IZzuSEnY" target="_blank" rel="noopener">Jedi Post-Order-66</a>.
    </p>
    <h3>Jedi Music</h3>
    <ul>
      <li><a href="https://youtu.be/o33l32ZrIy8" target="_blank" rel="noopener">Lo-Fi Radio Station</a></li>
      <li><a href="https://youtu.be/uOji0f5xyrg" target="_blank" rel="noopener">Jedi Meditation Music</a></li>
    </ul>
    <h3>Keep up with the Galaxy</h3>
    <ul>
      <li><a href="https://www.facebook.com/StarWars" target="_blank" rel="noopener">Facebook</a></li>
      <li><a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener">Instagram</a></li>
      <li><a href="https://twitter.com/starwars" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener">YouTube</a></li>
      <li><a href="https://www.starwars.com/news" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Temples by Planet</h3>
    <ul>
      <li><a href="https://starwars.fandom.com/wiki/Lothal_Jedi_Temple" target="_blank" rel="noopener">Lothal</a></li>
      <li><a href="https://starwars.fandom.com/wiki/Ilum_Temple" target="_blank" rel="noopener">Ilum</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Eedit</a></li>
      <li><a href="https://starwars.fandom.com/wiki/First_Jedi_Temple" target="_blank" rel="noopener">Ahch-To</a></li>
      <li><a href="https://www.starwars.com/databank/jedi-temple" target="_blank" rel="noopener">Coruscant</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Jedi',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
 color: rgb(60, 3, 151);
}
h3 {
  margin: 40px 0 0;
  color: dodgerblue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #afafbb;
}
p {
  color: aliceblue;
}
</style>
