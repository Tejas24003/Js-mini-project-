const mybtn = document.getElementById("mybtn");
const myPopover = document.getElementById("myPopover");
const close = document.getElementById("closebtn");
mybtn.addEventListener("click", function(){
    myPopover.classlist.add("active");
});

close.addEventListener("click", function(){
    myPopover.classlist.remove("active");
});