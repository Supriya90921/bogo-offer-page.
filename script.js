
    function toggle(el, price) {
        document.querySelectorAll('.option-box').forEach(box => box.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('total-val').innerText = price.toFixed(2);
    }
