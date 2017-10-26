console.log(1);

let bucket_list = ["qaz","wsx","edc","rfv","tgb"];
console.log(bucket_list.length);
console.log(bucket_list[2]);
for (let i = 0; i<bucket_list.length;i++){
	console.log(bucket_list[i]);
}

let odd_number = [1,3,5,7,9];
let prime_number = [2,3,5,7];

for (let p = 0; p<odd_number.length;p++){
	for (let o = 0; o<prime_number.length;o++){
		if (odd_number[p]==prime_number[o]){
			console.log(odd_number[p]);
		}
	}
}

let credit = 1000000;
let year = 0;
while (credit>0){
	credit -= 580;
	year++;
}
console.log(year);

odd_number.forEach(evennumber => console.log(evennumber +1));
let new_number = odd_number.filter(bignumber => bignumber>5);
console.log(new_number);