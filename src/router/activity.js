// 邀请好友
/* eslint-disable */
const invite = resolve => require(['@/components/activity/invite/index'], resolve)
const record1 = resolve => require(['@/components/activity/invite/record'], resolve)
const rebate_detail = resolve => require(['@/components/activity/invite/rebate_detail'], resolve)
const my_friend = resolve => require(['@/components/pub/comps/invited_record/my_friend.vue'], resolve)
const reward_record = resolve => require(['@/components/pub/comps/invited_record/reward_record'], resolve)
// 积分
const intergate = resolve => require(['@/components/activity/intergate/index'], resolve)
const my_friend1 = resolve => require(['@/components/activity/intergate/my_friend.vue'], resolve)
const reward_record1 = resolve => require(['@/components/activity/intergate/reward_record'], resolve)
/**
*  下载引导页
*/
const dndBoot = resolve => require(['@/components/app_terminal/dndBoot'], resolve)
const ACTIVITY = [      // 新建 活动路由   路由  activity 模块
    // 2018.6.21 邀请活动
    {
        path: '/activity/invite',
        name: 'invite',
        component: invite,
        meta: {
            title: '邀请好友'
        },
    },
    {
        path: '/activity/record',
        name: 'record1',
        component: record1,
        meta: {
            title: '我的战绩'
        },
    },
    {
        path: '/activity/rebate_detail',
        name: 'rebate_detail',
        component: rebate_detail,
        meta: {
            title: '返利明细'
        },
    },
    {
        path: '/pub/comps/invited_record/my_friend',
        name: 'my_friend',
        meta: {
            title: '我的好友'
        },
        component: my_friend,
    },
    {
        path: '/pub/comps/invited_record/reward_record',
        name: 'reward_record',
        meta: {
            title: '奖励记录'
        },
        component: reward_record,
    },
    // 新建 活动路由   路由  活动 模块  结束
    // 
    // 
    // 各种 协议书 纯文案的 
    // 积分
    {
        path: '/activity/intergate',
        name: 'intergate',
        component: intergate,
        meta: {
            title: '我的积分'
        },
    }, {
        path: '/activity/intergate/my_friend', //个人消息
        name: 'my_friend1',
        meta: {
            title: '我的好友'
        },
        component: my_friend1,
    },
    {
        path: '/activity/intergate/reward_record', //个人消息
        name: 'reward_record1',
        meta: {
            title: '奖励记录'
        },
        component: reward_record1,
    },

    // // xiazai
    {
        path: '/app_terminal/dndBoot', //下载页
        name: 'dndBoot',
        meta: {
            title: '集财'
        },
        component: dndBoot,
    }


]

export default ACTIVITY
