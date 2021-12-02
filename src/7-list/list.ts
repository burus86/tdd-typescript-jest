export class LinkedList<T> {
  public head: any;
  public length = 0;
  public isEmpty(): boolean {
    return true;
  }
  public addToHead(value: T) {
    this.head = { value, next: this.head };
    this.length++;
  }
  public getNodeByIndex(index: number): { value: T; next?: any } | undefined {
    if (index === 0) return this.head;
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  public getValueByIndex(index: number): T | undefined {
    const node = this.getNodeByIndex(index);
    return node ? node.value : undefined;
  }
  public addToTail(value: T) {
    const currentTail = this.getNodeByIndex(this.length - 1);
    if (currentTail) {
      currentTail.next = { value, next: undefined };
      this.length++;
    } else {
      this.addToHead(value);
    }
  }
}
