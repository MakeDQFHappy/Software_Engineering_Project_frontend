import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivateMessage  from '../views/PrivateMessageView.vue'
import QA_myAnswerView from '../views/QA_myAnswerView.vue'
import QA_myCollectionView from '../views/QA_myCollectionView.vue'
import QA_myQuestionView from '../views/QA_myQuestionView.vue'
import QA_RecommendView from '../views/QA_RecommendView.vue'
import QA_SearchView from '../views/QA_SearchView.vue'
import QA_DetailView  from '../views/QA_DetailView.vue'
import StudyNotesOverview  from '../views/StudyNotesOverviewView.vue'
import StudyNotes  from '../views/StudyNotesView.vue'
import FriendManage from '../views/FriendManage.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import Login from '../views/LoginView.vue'
// import StudyNotesOverview from '../views/StudyNotesOverviewView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: PrivateMessage
    },
    {
      path: '/QA_myAnswer',
      name: 'QA_myAnswer',
      component: QA_myAnswerView
    },
    {
      path: '/QA_myCollection',
      name: 'QA_myCollection',
      component: QA_myCollectionView
    },
    {
      path: '/QA_myQuestion',
      name: 'QA_myQuestion',
      component: QA_myQuestionView
    },
    {
      path: '/QA_Recommend',
      name: 'QA_Recommend',
      component: QA_RecommendView
      },
        {
      path: '/QA_Search',
      name: 'QA_Search',
      component: QA_SearchView
      },
      {
      path: '/QA_Details',
      name: 'QA_Details',
      component: QA_DetailView
    },
    {
      path: '/studyNotes',
      name: 'studyNotes',
      component: StudyNotes
    },
    {
      path: '/studyNotesOverview',
      name: 'studyNotesOverview',
      component: StudyNotesOverview
    },
    {
      path: '/FriendManage',
      name: 'FriendManage',
      component: FriendManage
    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },]
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/studyNotesOverview',
  //   name: 'studyNotesOverview',
  //   component: StudyNotesOverview
  // },
]

const router = new VueRouter({
  routes
})

export default router
