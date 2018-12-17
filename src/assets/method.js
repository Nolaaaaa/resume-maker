export function addContent() {
  const newItem = {}
  this.keys.map(key => {
    newItem[key] = ""
  });
  this.items.text.push(newItem)
}
export function removeContent(index) {
  this.items.text.splice(index, 1)
}