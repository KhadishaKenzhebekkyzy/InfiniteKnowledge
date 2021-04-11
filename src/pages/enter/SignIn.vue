<template>
    <div class="signIn">
        <div className="container">
            <language-switch style="margin-left:90%"/>
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
                            <h1><b>{{ $t('enter.sign-in.title') }}</b></h1>
                            
                                    <input
                                            required
                                            type="email"
                                            :placeholder="$t('enter.email')"
                                            className="inputFormsignin"
                                        />
                                    <input
                                            required
                                            type="password"
                                            :placeholder="$t('enter.password')"
                                            className="inputFormsignin"
                                        />
                            <router-link to="/user"><button type="submit">{{ $t('enter.sign-in.btn') }}</button></router-link>
                            <p>{{ $t('enter.sign-in.acc') }} <a href="/sign-up">{{ $t('enter.sign-up.btn') }}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import LanguageSwitch from '../../components/LanguageSwitch'

export default{
    components:{
        LanguageSwitch
    }
}
</script>

<style scoped src="../../assets/styles/sign-in.css">

</style>