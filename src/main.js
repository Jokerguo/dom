const div = dom.create('<div>afterDiv</div>')
const div2 = dom.create('<div>beforeDiv</div>')
const div1 = dom.create('<div></div>')
dom.after(test,div)
dom.before(test,div2)
dom.append(x,div)
dom.wrap(div4_1,div1)
dom.remove(y)

dom.empty(empty)

dom.attr(test,'title','guo')
const title = dom.attr(test,'title')
console.log(`title : ${title}`)

dom.text(test,'你好,我是div的新内容')

dom.style(test,'color','black')
// dom.style(test , {border : '1px solid red',color : 'blue'})

dom.class.add(test , 'red')
dom.class.remove(test,'red')
console.log(dom.class.has(test,'red'))

const fn = ()=>{
    console.log('被点击了一下')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]   
console.log(dom.find('#test'))//返回的是个数组

console.log(dom.parent(s1))
console.log(dom.siblings(s2))
console.log('--------')
console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))

const t = dom.find('#travel')[0]
console.log(t)
dom.each(dom.children(t),n=>dom.style(n,'color','red'))

console.log(dom.index(t1))