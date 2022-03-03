<template>
  <div id="main">
    <h1>Code Editor</h1>
    <textarea id="code"></textarea>
    <button id="run">Run</button>
    <div id="result"></div>
  </div>
</template>



<style scoped>
h1{
  text-align: center;
}
textarea{
  width: 600px;
  height: 500px;
  margin: 20px 0 0 32%;
}
#run{
  margin-left: 10px;
}
#result{
  display: flex;
  width: 602px;
  height: 50px;
  border:1px solid black;
  margin: 20px 0 0 32%;
}
</style>