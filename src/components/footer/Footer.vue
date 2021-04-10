<template>
  <div id="footer">
      <footer class="site-footer">
          <hr/>
        <div class="row">
        <div class="col-xs-6 col-md-2">
            <p>About us</p>
            <p>
             Contact us
            </p>
          </div>

          <div class="col-xs-6 col-md-2">
            <p>Terms</p>
            <p>
             Privacy policy
            </p>
          </div>


          <div class="col-xs-6 col-md-4" style="justify-content:center; text-align:center">
            <router-link to="/"><img class="logo" id="lo" src="../../assets/static/menu-logo.svg" style="max-width:10%; margin-top:5%"/></router-link>
          </div>

          <div class="col-xs-3 col-md-4" style="text-align:right">
            <img class="creators" id="c" src="../../assets/static/creators.svg" style="max-width:40%"/>
          </div>
        </div>
      </footer>
    </div>
</template>

<style scoped src='../../assets/styles/footer.css'>

</style>