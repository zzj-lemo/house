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
Mock.mock('http://mockjs.com/getResource', 'get', getResource())


const getfloorSwiper = () => {
    let resources = []
    for (let i = 0; i < 10; i++) {
        resources.push({
            'id|+1': 0,
            'type|1': ['hot','soon'],
            name: Random.cword(4,8),
            image: Random.dataImage('150x100', '楼盘图'),
            address: Random.city(true),
            area: '74-129㎡',
            price: '388万元/套起',
            time: Random.date(),
        })
    }
    return resources
}
Mock.mock('http://mockjs.com/getfloorSwiper', 'get', getfloorSwiper())
