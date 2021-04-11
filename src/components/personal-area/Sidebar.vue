<template>
    <nav class="main-menu">
            <ul>
                <li>
                    <a href="/">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            {{$t('user.sidebar.main')}}
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav active">
                    <a href="/user/dashboard">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            {{$t('user.sidebar.dashboard')}}
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/user/courses">
                        <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            {{$t('user.sidebar.courses')}}
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/user/statistics">
                       <i class="fa fa-bar-chart fa-2x"></i>
                        <span class="nav-text">
                            {{$t('user.sidebar.statistics')}}
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <language-switch style="margin-left:10px; margin-top:15px"/>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="/sign-in">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
    </nav>
</template>

<script>
import LanguageSwitch from '../LanguageSwitch.vue'

export default {
    components:{
        LanguageSwitch
    }
}
</script>

<s
        LanguageSwitchtyle scoped src="../../assets/styles/sidebar.css">

</style>