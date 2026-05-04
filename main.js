// ============= Ganti Tema ==============
 
const main = document.getElementById("section")
const pesan = document.getElementById('pesan')
const tema = document.querySelector(".tombol-tema");
tema.addEventListener('click', () => {
    main.classList.toggle('dark')
    pesan.classList.toggle('dark')
    tema.querySelector('i').classList.toggle('fa-sun');
    tema.querySelector('i').classList.toggle('fa-moon');

    
})
window.addEventListener('load', () => {
    if(main.classList.contains('dark')){
        tema.querySelector('i').classList.add('fa-moon');
    }else{
        tema.querySelector('i').classList.add('fa-sun');
    }
})

// ================ PEsan ===================

const form = document.getElementById('form')
form.addEventListener('submit', (x) =>{
    x.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesanText').value;
    let valid = true

    if(nama == ""){
        alert("Nama wajib di isi!!!")
        valid = false;
    }

    const emailfix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (email==""){
        alert("Email wajib di isi!!!")
        valid=false;
    }
    else if(!emailfix.test(email)){
        alert("salah format email")
        valid=false;
    }

    if(pesan==""){
        alert("Pesan wajib di isi!!!")
        valid=false;
    }


    if(valid){
        const nama = document.getElementById('nama').value="";
        const email = document.getElementById('email').value="";
        const pesan = document.getElementById('pesanText').value="";
        const btn = document.getElementById('btn')
        btn.classList.add('sukses')

        setTimeout(() => {
            btn.classList.remove('sukses')
        }, 500);
    }
    
})

// ======== nama gerak ========
var typed = new Typed('.typing', {
    strings:["", "Fadhlurrohman"],
    typeSpeed:150,
    BackSpeed:60,
    loop:true
})