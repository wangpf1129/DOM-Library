window.dom = {
  create(string) {
    // 创建容器    template标签可以容纳任意元素
    const container = document.createElement('template')
    // 要trim，防止拿到空字符
    container.innerHTML = string.trim()
    // 必须要 使用 .content  要不然拿不到
    return container.content.firstChild

    // 或者
    // container.innerHTML = string
    // return container.content.children[0]
  },
  after(node, newNode) {
    // 找到此节点的爸爸然后调用insertBefore（插入某个节点的前面）方法，
    //把 newNode 插入到下一个节点的前面
    return node.parentNode.insertBefore(newNode, node.nextSibling)
  },
  before(node, newNode) {
    // 正常的返回DOM原生的添加前面的节点的方法即可
    return node.parentNode.insertBefore(newNode, node)
  },
  append(newNode, node) {
    return newNode.appendChild(node)
  },
  wrap(node, newNode) {
    // 先把newNode放在node节点的前面   后面也行
    dom.before(node, newNode)
    // 然后把node节点放在newNode里面
    dom.append(newNode, node)
  },
  remove(node) {
    node.parentNode.removeChild(node)
    //返回删除的节点
    return node
  },
  empty(node) {
    let firstChild = node.firstChild,
      array = []
    while (firstChild) {
      array.push(dom.remove(node.firstChild))
      firstChild = node.firstChild
    }
    // 返回删除的节点
    return array

  },
  attr(node, name, value) {
    if (arguments.length === 3) { // 重载
      // 设置该节点某个属性和属性值
      node.setAttribute(name, value)
    } else if (arguments.length === 2) {
      // 查看该节点某个属性的值
      return node.getAttribute(name)
    }
  },
  text(node, string) {
    if (arguments.length === 2) { // 重载
      if ('innerText' in node) { // 兼容 ie
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(xxx,'color','red')
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {
        // dom.style(xxx,'color')
        return node.style[name]
      } else if (name instanceof Object) {
        // dom.style(xxx,{color:'red'})
        const object = name
        for (let key in object) {
          // 不能用 style.key 是因为 key是变量
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  siblings(node) {
    return Array.from(node.parentNode.children)
      .filter(n => n !== node)
  },
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) { //  1是元素节点， 3是文本节点
      x = x.nextSibling
    }
    return x
  },
  previous(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) { //  1是元素节点， 3是文本节点
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  index(node) {
    const list = dom.children(node.parentNode)
    for (let i = 0; i < list.length; i++) {
      if (list[i] === node) {
        return i
      }
    }
  }
}