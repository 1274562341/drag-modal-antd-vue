const drag_fun = (tagName, dragName) => {
  console.log(tagName, dragName);
  let tagDom = document.querySelector(tagName)
  let dragDom = document.querySelector(dragName)
  tagDom.onmousedown = (e) => {
    let offsetX = e.pageX - dragDom.offsetLeft
    let offsetY = e.pageY - dragDom.offsetTop
    document.onmousemove = (d) => {
      let left = d.pageX - offsetX;
      let top = d.pageY - offsetY;
      dragDom.style.left = left + 'px'
      dragDom.style.top = top + 'px'
    }
    document.onmouseup = function () {
      document.onmousemove = null;
    }
  }
}
export default {
  drag_fun
}