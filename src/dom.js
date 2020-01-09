window.dom = {
    create(string){
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node,newNode){
        node.parentNode.insertBefore(newNode,node.nextSibling)
    },
    before(node,newNode){
        node.parentNode.insertBefore(newNode,node)
    },
    append(parent,node){
        parent.appendChild(node)
    },
    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
//
    remove(node){
        node.parentNode.removeChild(node)
        return node   
    },
    empty(node){
        const  arr = []
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return arr 
    },
//
    attr(node ,name , value){
        if(arguments.length === 3){   // 参数个数写不同代码叫做重载
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },

    text(node,value){
        if(arguments.length === 2 ){       
            if('innerText' in node){   //适配
                node.innerText = value   //ie
            }else{
                node.textContent = value   //firefox  chrome
            }
        }else if(arguments.length === 1){
            if('innerText' in node){   //适配
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },

    html(node , string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1 ){
            return node.innerHTML
        }
    },

    style(node , name,value){
        if(arguments.length ===3){
            //style(test , 'color','red')
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                // style(test , 'color')
                return node.style[name]
            }else if(name instanceof Object){  
                // dom.style(test , {border : '1px solid red',color : 'blue'})
                for(let key in name){
                    node.style[key] = name[key]
                    console.log(name[key])
                }
            }
        }
    },

    class : {
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },

    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },

    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)

    },

    find(selector,scope){   //scope范围
        return (scope ||document ).querySelectorAll(selector)
    },

    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n=> n!==node)
        //filter 过滤
    },

    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            console.log(x)
            x = x.nextSibling
        }
        return x
    },

    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },

    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i = 0 ; i<list.length;i++){
            if(list[i] === node){
                break
            }
        }
        return i
    }

}
