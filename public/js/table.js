// document.addEventListener('DOMContentLoaded', function () {
//     const wrapper1 = document.querySelector('.wrapper1');
//     const wrapper2 = document.querySelector('.wrapper2');
//     const wrapper3 = document.querySelector('.wrapper2');

//     function syncScroll(event) {
//         if (event.target === wrapper1) {
//             wrapper2.scrollLeft = wrapper1.scrollLeft;
//             console.log(1);
//         } else {
//             wrapper1.scrollLeft = wrapper2.scrollLeft;
//                         console.log(2);

//         }
//     }

//     wrapper1.addEventListener('scroll', syncScroll);
//     wrapper2.addEventListener('scroll', syncScroll);
// });
document.addEventListener('DOMContentLoaded', function () {
    const wrapper1 = document.querySelector('.wrapper1');
    const wrapper2 = document.querySelector('.wrapper2');
    const wrapper3 = document.querySelector('.wrapper3');

    function syncScroll(event) {
        if (event.target === wrapper1) {
            wrapper2.scrollLeft = wrapper1.scrollLeft;
            wrapper3.scrollLeft = wrapper1.scrollLeft;
        }
         else if (event.target === wrapper3) {
            wrapper2.scrollLeft = wrapper3.scrollLeft;
            wrapper1.scrollLeft = wrapper3.scrollLeft;
        } 
        else {
            wrapper1.scrollLeft = wrapper2.scrollLeft;
            wrapper3.scrollLeft = wrapper2.scrollLeft;
        }
    }

    wrapper1.addEventListener('scroll', syncScroll);
    wrapper2.addEventListener('scroll', syncScroll);
    wrapper3.addEventListener('scroll', syncScroll);
});
