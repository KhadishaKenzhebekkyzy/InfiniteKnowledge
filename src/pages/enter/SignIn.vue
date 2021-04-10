<template>
    <div class="signIn">
        <div className="container">
            <router-link to="/">
            <img src="../../assets/static/logo.svg" style="max-width:20%"/>
            </router-link>
            <div class="card">
                <div class="row" style="position:relative">
                    <div class="col-md-6">
                        <img src="../../assets/static/enter.svg" style="max-width:130%"/>
                    </div>
                    <div class="col-md-6">
                        <div className="row">
                            <h1>Sign In</h1>
                            
                                    <input
                                            required
                                            type="email"
                                            placeholder="Enter email"
                                            className="inputFormsignin"
                                        />
                                    <input
                                            required
                                            type="password"
                                            placeholder="Enter password"
                                            className="inputFormsignin"
                                        />
                            <router-link to="/user"><button type="submit">Sign in</button></router-link>
                            <p>Don't have an account? <a href="/sign-up">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style scoped src="../../assets/styles/sign-in.css">

</style>