let products = document.querySelectorAll('.product');

products.forEach((product) => {
  product.addEventListener('mouseover', () => {
    product.style.border = 'solid 1px';
    product.children[4].style.visibility = 'visible';
    product.children[5].style.visibility = 'visible';
  });
});

products.forEach((product) => {
  product.addEventListener('mouseout', () => {
    product.style.border = 'none';
    product.children[4].style.visibility = 'hidden';
    product.children[5].style.visibility = 'hidden';
  });
});
