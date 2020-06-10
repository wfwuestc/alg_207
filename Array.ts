class Arrays {
  private size: number
  private data: Array<number>

  constructor(capacity: number = 10) {
    this.data = new Array(capacity)
    this.size = 0
  }

  getSize(): number {
    return this.size
  }

  get(index: number) {
    if (index < 0 || index >= this.size) {
      return new Error('Get failed. Index is illegal')
    }

    return this.data[index]
  }

  set(index: number, e: number) {
    if (index < 0 || index >= this.size) {
      return new Error('Set failed. Index is illegal')
    }
    this.data[index] = e
  }

  contains(e: number) {
    for(let i = 0; i < this.size; i++) {
      if(this.data[i] === e) {
        return true
      }
    }
    return false
  }

  getCapacity(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  addLast(e: number) {
    this.add(this.size, e)
  }

  addFirst(e: number) {
    this.add(0, e)
  }
  
  toString() {
    let res = `
    Array: size = ${this.size}, capacity = ${this.data.length}
    [ `
    this.data.forEach((el, i) => {
      res += i === (this.size - 1) ? (el + ' ]') : (el + ', ') 
    })
    console.log(res)
    return res
  }

  add(index: number, e: number) {
    if (this.size === this.data.length) {
      return new Error('AddLast failed. Array is full.')
    }

    if (index < 0 || index > this.size) {
      return new Error('AddLast failed. Require index >= 0')
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[index] = e
    this.size += 1
  }
}
const test = new Arrays(20)
for(let i = 0; i < 10; i++) {
  test.addLast(i)
}

test.add(1, 100)
test.addFirst(-1)

test.toString()