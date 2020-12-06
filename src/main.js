// const nodes = dom.empty(window.emptyDiv)
// console.log(nodes);

// 将ID为test的标签中title属性设置为 hello
dom.attr(test, 'title', 'hello')
// 将title的值打印出来
let title = dom.attr(test, 'title')
// console.log(title); // 打印为 hello

// dom.text(test, '这是修改后的示例')
// console.log(dom.text(test));

// dom.html(test, '<em>我是修改后的html</em>')
// console.log(dom.html(test));

// test.style.color = 'red'    原生DOM修改样式
// test.style['color'] = 'red' 原生DOM修改样式
// dom.style(test, {border:'1px solid red',color:'blue'})
// dom.style(test, 'color', 'red')
// console.log(dom.style(test,'color'));


// dom.class.add(test, 'red')
// dom.class.remove(test, 'red')
// console.log(dom.class.has(test, 'red'));

// let fn = () => {
//   console.log('我点击了');
// }
// dom.on(test, 'click', fn)

// dom.off(test,'click',fn)


// const testDiv = dom.find('#test')[0]


// const emptyDiv = dom.find('#emptyDiv')[0]
const e1 = dom.find('#e1')[0]
// console.log(dom.parent(e1));
// console.log(dom.children(emptyDiv));
// console.log(dom.siblings(e1));
// console.log(dom.next(e1));

// const e2 = dom.find('#e2')[0]
// console.log(dom.previous(e2));


const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => {
//   dom.style(n, {
//     color: 'red'
//   })
// })

const t1 = dom.find('#t1')[0]
console.log(dom.index(t1));