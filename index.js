(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            let onlyLetters = /^[a-zA-Z\s]+$/;
            let onlyNumbers = /^[0-9]+$/;
            form.addEventListener('submit', function (e) {
                if (onlyLetters.test(form.fname.value) === false) {
                    form.fname.classList.remove('is-valid');
                    form.fname.classList.add('is-invalid');
                } else {
                    form.fname.classList.add('is-valid');
                    form.fname.classList.remove('is-invalid');
                }
                if (onlyLetters.test(form.lname.value) === false) {
                    form.lname.classList.remove('is-valid');
                    form.lname.classList.add('is-invalid');
                } else {
                    form.lname.classList.add('is-valid');
                    form.lname.classList.remove('is-invalid')
                }
                if(onlyLetters.test(form.city.value) === false) {
                    form.city.classList.remove('is-valid');
                    form.city.classList.add('is-invalid');
                } else {
                    form.city.classList.add('is-valid');
                    form.city.classList.remove('is-invalid');
                }
                if(onlyNumbers.test(form.ccnumber.value) === false){
                    form.ccnumber.classList.remove('is-valid');
                    form.ccnumber.classList.add('is-invalid');
                } else {
                    form.ccnumber.classList.add('is-valid');
                    form.ccnumber.classList.remove('is-invalid');
                }
                if(onlyNumbers.test(form.cvcnumber.value) === false) {
                    form.cvcnumber.classList.remove('is-valid');
                    form.cvcnumber.classList.add('is-invalid');
                } else {
                    form.cvcnumber.classList.add('is-valid');
                    form.cvcnumber.classList.remove('is-invalid');
                } 
                if(onlyNumbers.test(form.amount.value) === false) {
                    form.amount.classList.remove('is-valid');
                    form.amount.classList.add('is-invalid');
                } else {
                    form.amount.classList.add('is-valid');
                    form.amount.classList.remove('is-invalid');
                }
                if(onlyNumbers.test(form.postalcode.value) === false) {
                    form.postalcode.classList.remove('is-valid');
                    form.postalcode.classList.add('is-invalid');
                } else {
                    form.postalcode.classList.add('is-valid');
                    form.postalcode.classList.remove('is-invalid');
                }

                if(form.state.value === "pickAState"){
                    form.state.classList.remove('is-valid');
                    form.state.classList.add('is-invalid');
                } else {
                    form.state.classList.add('is-valid');
                    form.state.classList.remove('is-invalid');
                }
                if (form.checkValidity() === false) {
                    
                    console.log(form);
                    e.preventDefault();
                    e.stopPropagation();
                    
                }
            }, false);
        });
    }, false);
})();