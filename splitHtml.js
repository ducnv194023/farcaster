const _ = require('lodash')
const nodeHtmlToImage = require('node-html-to-image')

const result = []
handleImgTag = (text) => {
    const parts =  text.split(/(<img.*?>)/);
    return parts

}
const arr = handleImgTag(text)

const queue = []

_.map(arr, (item) => {

    if(item[0] !== '<') item = queue.shift().concat(item)
    if(!item.includes('h2')) return result.push(item)

    const arr2 = item.split(/(<h2>(.*?)<\/h2>)/g).filter(Boolean);

    return _.map(arr2, (item2) => {

        if (!item2.includes('h3')) return result.push(item2);
        const arr3 = item2.split(/(<h3>(.*?)<\/h3>)/g).filter(Boolean);

        return _.map(arr3, (item3) => {
            if (!item3.includes('h4')) return result.push(item3);
            const arr4 = item3.split(/(<h4>(.*?)<\/h4>)/g).filter(Boolean);
            return arr4;
        })
    })
})

console.log('result')
