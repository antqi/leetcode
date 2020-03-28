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
      cur = null,
      length = 0

    cur = head

    while (length !== index) {
      length++
    }
  }

  insert() {}

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
