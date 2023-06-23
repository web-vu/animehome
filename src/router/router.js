import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AnimeView from "@/components/AnimeView.vue";
import AgentOfTime from "@/components/anime/AgentOfTime.vue";



const router = createRouter({
    routes: [{
        path: '/',
        name: 'Main',
        component: HomeView,
    },{
        path: '/anime',
        name: 'Anime',
        component: AnimeView
    },{
        path: '/anime/agent-of-time',
        name: 'AgentOfTime',
        component: AgentOfTime
    }],
    history: createWebHistory()
})

export default router;