var incomeBracket = ""

btnSubmit.onclick=function(){
  incomeAmount.value = inptIncome.value
  if ((incomeAmount.value < "30,000")
else NSB.MsgBox("income less than $30,000, tax bracket is 8%")
  if ((incomeAmount.value < "99,999")
else NSB.MsgBox("income less than $99,999, tax bracket is 15%") 
  if ((incomeAmount.value >= "99,999")
else NSB.MsgBox("income less than $99,999, tax bracket is 25%") 
}

btnGoAgain.onclick=function(){
  incomeAmount.value = ""
}

