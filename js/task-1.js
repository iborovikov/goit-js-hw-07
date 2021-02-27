const listRef = document.querySelector('#categories');
const categoriesRef = document.querySelectorAll('.item')
console.log(`В списке ${listRef.children.length} категории.`)

const getCategoriesData = (cat) => {
  cat.forEach(elm => 
    console.log(`
    Категория: ${elm.firstElementChild.textContent}
    Количество элементов: ${elm.lastElementChild.children.length}`))
}
getCategoriesData(categoriesRef)

