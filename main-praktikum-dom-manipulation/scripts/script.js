const input = document.querySelector('#habitInput');
const addBtn = document.querySelector('#addBtn');
const habitList = document.querySelector('#habitList');

addBtn.addEventListener('click', () => {
  // 1. Validasi
  if (input.value.trim() === '') {
    alert('Input tidak boleh kosong!');
    return;
  }

  // 2. Bikin li (createElement)
  const li = document.createElement('li');

  // Karena pakai Tailwind, kita set attribute class-nya langsung
  // group: dipakai supaya tombol hapus cuma muncul saat li di-hover
  li.className =
    'bg-slate-700 p-3 rounded-lg flex justify-between items-center cursor-pointer transition-all hover:bg-slate-600 break-words group border border-slate-600';

  // 3. Isi text
  li.textContent = input.value;

  // 4. Kita bisa toggle multiple class Tailwind untuk efek visual
  li.addEventListener('click', () => {
    li.classList.toggle('line-through');
    li.classList.toggle('text-slate-500');
    li.classList.toggle('bg-slate-800');
    li.classList.toggle('border-slate-800');
  });

  // 5. Buat tombol Hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';

  // Styling tombol hapus pakai Tailwind
  deleteBtn.className =
    'bg-rose-500 hover:bg-rose-400 text-slate-900 font-semibold cursor-pointer px-3 py-1 rounded-md text-sm ml-3 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md shadow-rose-500/20';

  deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    // Hapus list dengan menggunakan method remove()
    li.remove();
  });

  // 6. Masukin tombol ke li (appendChild)
  li.appendChild(deleteBtn);
  // 7. Masukin li ke ul (appendChild)
  habitList.appendChild(li);
  // 8. Reset input
  input.value = '';
});

// BONUS: Enter buat tambah task
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
