document.querySelectorAll('.btnEx').forEach((item) => {
  item.addEventListener('click', () => {
    alert('Hi From External JS');
  });
});
