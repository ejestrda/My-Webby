console.log(`hello!`);
console.log(`baket?`);


window.alert(`thank you for viewing my page`);
window.alert(`can you rate it?`);

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeBtn.addEventListener("click", function(){
    count +=1;
    likeCount.textContent = count;
});

