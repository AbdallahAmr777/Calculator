let Calculator = {
  calculator: document.getElementById("textInput"),
  firstValue: null,
  operator: 0,
  newOperation: true,
  CurrentArray:[],
  WriteText: function (button) {
    if (Calculator.calculator.value !== "" && this.newOperation === false) {
      Calculator.calculator.value = button.value;
      newOperation = true;
      return;
    } else {
      Calculator.calculator.value += button.value;
    }
  },
  OperatorClick: function (CurrentOperator) {
    if (Calculator.calculator.value === "") {
      alert("Please Enter First Number");
      return;
    }
    this.firstValue = parseFloat(Calculator.calculator.value);
    this.operator = CurrentOperator;
    Calculator.calculator.value = "";
  },
  Calculation: function () {
    if (this.firstValue === null) {
      alert("Please Enter First Number");
      return;
    }
    if (Calculator.calculator.value === "") {
      alert("Please Enter Second Number");
      return;
    }
    let NewValue = parseFloat(Calculator.calculator.value);
    switch (this.operator) {
      case "+":
        result = this.firstValue + NewValue;
        break;
      case "-":
        result= this.firstValue - NewValue;
        break;
      case "*":
        result = this.firstValue * NewValue;
        break;
      case "/":
        result= this.firstValue / NewValue;
        break;
    }
    Calculator.calculator.value =result;
    this.CurrentArray.push(result);
    let valueScreen=document.getElementById("value");
    valueScreen.innerHTML="";
    // for(let i=0 ;i<this.CurrentArray.length; i++)
    // {
    //     valueScreen.innerHTML+="<li>"+this.CurrentArray[i] +"</il>"   
    // }
    this.CurrentArray.forEach(function(arrayNum,i){
        valueScreen.innerHTML+="<li>"+arrayNum+"</li>";
    })
    // valueScreen.innerText=this.CurrentArray.join("\r")
    this.firstValue = null;
    this.operator = 0;
    this.newOperation = false;
  },
  ClearData: function () {
    this.calculator.value = "";
    this.firstValue = null;
    this.operator = 0;
    this.newOperation = false;
  },
};
