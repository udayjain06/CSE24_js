function calculateResult() {
    const n= document.getElementById('Subjects').value;
    let total = 0;
    let i;
    for (i = 0; i <= n; i++) {
        let x=parseFloat(prompt("enter the subject number"+(i+1)));
        total += x;
    }

    let avg = total / n;
    let grade;
    if (avg >= 90) { 
        grade = 'A';   
    }
    else if (avg >= 80) {
        grade = 'B';
    }
    else if (avg >= 70) {
        grade = 'C';
}
let r;
 if (avg>40)
    r="pass";
else
    r="fail"

let result=document.getElementById('result')
result.innerHTML="Total marks  "+total+"<br>grade: " + avg +"<br>grade: "+grade+"<br>result: "+r;
}
