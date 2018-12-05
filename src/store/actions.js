//vue的action模块
import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'
import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  LoginWay
} from './mutation-types'
export default {
  //异步获取首页data数据
  async getData({commit}, cb) {
    const result = await reqData()
    commit(Data, {data: result.data})
    cb && cb()
  },
  //异步获取首页banner信息
  async getBanner({commit}, cb) {
    const result = await reqBanner()
    //focusList数据在home_data.json数据里面
    commit(Banner, {banner: result.focusList})
    cb && cb()
  },
  //异步获取home信息
  async getHome({commit}, cb) {
    const result = await reqHome()
    commit(Home, {result})
    cb && cb()
  },
  //异步获取detail识物页面数据
  async getDetail({commit}, cb) {
    const result = await reqDetail()
    commit(Detail, {result})
    cb && cb()
  },
  //异步获取分类页面即nav数据
  async getNav({commit},cb){
    const result = await reqNav()
    commit(Nav, {result})
    cb && cb()
  },
  //同步设置loginWay
  setLoginWay({commit},loginWay){
    commit(LoginWay, loginWay)
  }

}
