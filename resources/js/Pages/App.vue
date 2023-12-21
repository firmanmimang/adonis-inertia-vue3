<template>
  <div>
    <h1 class="text-2xl text-gray-700 font-semibold">Welcome</h1>
    <p class="text-gray-600">{{testing}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      testing: String
    },
  }
</script>