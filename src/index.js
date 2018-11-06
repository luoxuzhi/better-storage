/*
* @Author: luoxuzhi848
* @Date:   2018-11-06 14:17:25
* @Last Modified by:   luoxuzhi848
* @Last Modified time: 2018-11-06 15:32:14
*/
class Storage  {

  constructor(props) {
    this.props = props || {}
    this.source = this.props.source || window.localStorage
    this.initRun()
  }

  initRun(){
    const reg = new RegExp("__expires__")
    let data = this.source
    let list = Object.keys(data)
    if(list.length > 0){
      list.map((key,v)=>{
        if( !reg.test(key)){
          let now = Date.now()
          let expires = data[`${key}__expires__`] || Date.now() + 1
          if (now >= expires ) {
            this.remove(key)
          }
        }
        return key
      })
    }
  }

  set(key, value, expired) {
    /*
    * set 存储方法
    * @ param {String}  key 键
    * @ param {String}  value 值，
    * @ param {String}  expired 过期时间，以分钟为单位，非必须
    */
    let source = this.source
    source[key] = JSON.stringify(value)
    if (expired){
      source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired
    }
    return value
  }

  get(key) {
    /*
    * get 获取方法
    * @ param {String}  key 键
    * @ param {String}  expired 存储时为非必须字段，所以有可能取不到，默认为 Date.now() + 1,
    */
    const source = this.source
    const now = Date.now()
    const expired = source[`${key}__expires__`] || Date.now() + 1

    if ( now >= expired ) {
      this.remove(key)
      return
    }
    const value = source[key] ? JSON.parse(source[key]) : source[key]
    return value
  }

  remove(key) {
    const data = this.source
    let value = data[key]
    delete data[key]
    delete data[`${key}__expires__`]
    return value
  }

}

const storage = new Storage()

export default storage