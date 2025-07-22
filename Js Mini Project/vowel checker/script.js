function checkVowels(){
    var text = document.getElementById("inputText").value;
    var vowelCount = 0 ;
    text = text.toLowerCase();
    for (let i = 0; i< text.length; i++) {
      var char = text.charAt(i);
      if(check(char)){
        vowelCount++;
      }
       
    }
    var result = document.getElementById("result");
    result.textContent = "Total Vowels" + vowelCount ;
}

function check(char){
    var vowels =["a","e","i","o","u"];
    return vowels.includes(char);
}