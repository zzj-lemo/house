const Mock = require('mockjs')
const Random = Mock.Random


const getResource = () => {
    let resources = []
    for (let i = 0; i < 10; i++) {
        resources.push({
            title: Random.cword(2, 4),
            image: Random.image('30x30', '#fff' ,'#000', '图标'),
        })
    }
    return resources
}
/**
 * 格式： Mock.mock(url, post/get , 返回的数据)；
 * 当post或get请求到路由的时候mock会拦截并返回
 * 注意写全路径
 **/
Mock.mock('http://localhost:8088/getResource', 'get', getResource())