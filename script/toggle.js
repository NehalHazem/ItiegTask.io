const productBtn = document.getElementById('product');
const warehouseBtn = document.getElementById('warehouse');
const imgPara2 = document.querySelector('.imgPara2');
const imgPara222 = document.querySelector('.imgPara222');

warehouseBtn.addEventListener('click', () => {
    imgPara2.classList.add('hide');
    imgPara222.classList.remove('hide');
    warehouseBtn.style.background = '#05A679';
    productBtn.style.background = '#96CDE1';
})

productBtn.addEventListener('click', () => {
    imgPara2.classList.remove('hide');
    imgPara222.classList.add('hide');
    warehouseBtn.style.background = '#96D7C5';
    productBtn.style.background = '#058DBF';
})