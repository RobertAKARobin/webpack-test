import Print from './components/print';

import './components/alert';

document.addEventListener('DOMContentLoaded', () => {
    const printer = new Print();
    document.body.innerHTML = printer.render('Hello');
});
