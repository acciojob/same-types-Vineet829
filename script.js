function isSameType(value1, value2) {
    if(Number(value1) === NaN &&  Number(value2) === NaN){
		 return true
	}
	else if(Number(value1) !== NaN && Number(value2) !== NaN && typeof Number(value1) === typeof Number(value2) {
		 return true
		}    
	
		else{
		return false
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
