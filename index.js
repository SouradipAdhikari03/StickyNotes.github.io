const addButton = document.getElementById('add');
const cc = document.getElementById('cc');

const updateLSData=()=>{
     const textareaData =document.querySelectorAll('textarea');
     const notes=[];

     textareaData.forEach((note)=>{
         return notes.push(note.value);
        })
        // console.log(notes);


        localStorage.setItem('notes', JSON.stringify(notes));
    }


count=0;
const addNewNote=(text='')=>{
    ++count;
    const note =document.createElement('div');
    note.classList.add('note');
    const htmlData=`
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? "" :"hidden"}"></div>
<textarea class="${text ? "hidden" :""}"></textarea>   
`;
note.insertAdjacentHTML('afterbegin',htmlData)
console.log(note);


const editButton=note.querySelector('.edit')
const deleteButton=note.querySelector('.delete')
const mainDiv=note.querySelector('.main')
const textarea=note.querySelector('textarea')

// delete
deleteButton.addEventListener('click',()=>{
    note.remove();
    --count;
    updateLSData();
    cc.innerHTML=count;
    console.log(count);
})
// toggle
textarea.value=text;
mainDiv.innerHTML=text;
editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden')
})
textarea.addEventListener('change',(event)=>{
    const value=event.target.value;
    // console.log(value);
    mainDiv.innerHTML=value;


    updateLSData();
})

document.body.appendChild(note)
cc.innerHTML=count;
console.log(count);
}

// getting data back 

const notes= JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note)=>addNewNote(note))}
addButton.addEventListener('click',()=> addNewNote());



