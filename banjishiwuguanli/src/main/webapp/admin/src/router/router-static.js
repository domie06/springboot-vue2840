import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import clazz from '@/views/modules/clazz/list'
    import dictionary from '@/views/modules/dictionary/list'
    import huida from '@/views/modules/huida/list'
    import jiangcheng from '@/views/modules/jiangcheng/list'
    import kaoqin from '@/views/modules/kaoqin/list'
    import laoshi from '@/views/modules/laoshi/list'
    import qingjia from '@/views/modules/qingjia/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import zuoye from '@/views/modules/zuoye/list'
    import dictionaryChengji from '@/views/modules/dictionaryChengji/list'
    import dictionaryJiangcheng from '@/views/modules/dictionaryJiangcheng/list'
    import dictionaryJiangchengErji from '@/views/modules/dictionaryJiangchengErji/list'
        import dictionaryJiangchengErjiAddOrUpdate from '@/views/modules/dictionaryJiangchengErji/add-or-update'//二级
    import dictionaryKaoqin from '@/views/modules/dictionaryKaoqin/list'
    import dictionaryQingjia from '@/views/modules/dictionaryQingjia/list'
    import dictionaryQingjiaYesno from '@/views/modules/dictionaryQingjiaYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZuoye from '@/views/modules/dictionaryZuoye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChengji',
        name: '成绩类型',
        component: dictionaryChengji
    }
    ,{
        path: '/dictionaryJiangcheng',
        name: '奖惩类型',
        component: dictionaryJiangcheng
    }
    ,{
        path: '/dictionaryJiangchengErji',
        name: '惩罚类型',
        component: dictionaryJiangchengErji
    }
    ,{
        path: '/dictionaryJiangchengErjiAddOrUpdate',
        name: '惩罚类型的新增修改页面',
        component: dictionaryJiangchengErjiAddOrUpdate
    }
    ,{
        path: '/dictionaryKaoqin',
        name: '考勤类型',
        component: dictionaryKaoqin
    }
    ,{
        path: '/dictionaryQingjia',
        name: '请假类型',
        component: dictionaryQingjia
    }
    ,{
        path: '/dictionaryQingjiaYesno',
        name: '审核结果',
        component: dictionaryQingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZuoye',
        name: '作业类型',
        component: dictionaryZuoye
    }


    ,{
        path: '/chengji',
        name: '成绩',
        component: chengji
      }
    ,{
        path: '/clazz',
        name: '班级',
        component: clazz
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/huida',
        name: '回答',
        component: huida
      }
    ,{
        path: '/jiangcheng',
        name: '奖惩',
        component: jiangcheng
      }
    ,{
        path: '/kaoqin',
        name: '考勤',
        component: kaoqin
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/qingjia',
        name: '请假',
        component: qingjia
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
    ,{
        path: '/zuoye',
        name: '作业',
        component: zuoye
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
