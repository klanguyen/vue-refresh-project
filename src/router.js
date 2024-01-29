import {createRouter, createWebHistory} from 'vue-router';

import CoachDetails from './components/coaches/CoachDetails.vue';
import CoachesList from './components/coaches/CoachesList.vue';
import CoachRegistration from './components/coaches/CoachRegistration.vue';
import ContactCoach from './components/requests/ContactCoach.vue';
import RequestsReceived from './components/requests/RequestsReceived.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [
                { path: 'contact', component: ContactCoach },
        ]},
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;