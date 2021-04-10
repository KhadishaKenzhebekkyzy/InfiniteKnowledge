<template>
    <div class="signIn">
        <div className="container">
            <router-link to="/">
            <img src="../../assets/static/logo.svg" style="width:20%"/>
            </router-link>
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <img src="../../assets/static/enter.svg" style="width:130%"/>
                    </div>
                    <div class="col-md-6">
                        <div className="row">
                            <h1>Sign Up</h1>
                            
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
                            <button type="submit">Sign up</button>
                            <p>Already have an account? <a href="/sign-in">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style scoped src="../../assets/styles/sign-up.css">

</style>