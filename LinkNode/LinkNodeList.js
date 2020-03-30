//  节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 链表
class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    let node = new Node(element)

    if (!this.head) {
      this.head = node
    } else {
      let cur = this.head

      while (cur.next) {
        cur = cur.next
      }

      cur.next = node
    }

    this.length++
  }

  remove(index) {
    let prev = null,
      cur = this.head,
      curIndex = 0

    if (index === 0) {
      this.head = this.head.next
      return element
    }

    while (cur.next && curIndex !== index) {
      curIndex++
      prev = cur
      cur = cur.next
    }

    this.length--
    prev.next = cur.next
    return element
  }

  insert(index, element) {
    let cur = this.head,
      node = new Node(element),
      prev = null,
      curIndex = 0

    if (index === 0) {
      node.next = this.head
      this.head = node
      this.length++
      return element
    }

    while (curIndex <= this.length && curIndex !== index) {
      curIndex++
      prev = cur
      cur = cur.next
    }

    prev.next = node
    node.next = cur
    this.length++
    return element
  }

  log() {
    let [cur, res] = [this.head, []]

    while (cur.next) {
      res.push(cur.element)
      cur = cur.next
    }

    res.push(cur.element)
    console.log(res.join(' -> '))
    // return res.join(' -> ')
  }
}

let linkNode = new LinkNodeList()
linkNode.append('Hi')
linkNode.append('Sara')
linkNode.append('nice to meet you !')
linkNode.log()
// linkNode.remove(2)
// linkNode.log()
// linkNode.remove(0)
linkNode.insert(1, '插队')
linkNode.log()
