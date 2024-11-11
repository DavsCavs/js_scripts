for (let i = 0; i<21; i++){
    console.log(i);
}
for (let i = 20; i>=0; i--){
    console.log(i);
}

const friends = ["aivars", "anna", "kristaps", "kristers", "raivo"];
console.log(friends[0]);
console.log(friends[2]);

let garums = friends.length;

for (let i = 0; i<garums; i++){
    console.log(`${i+1}.${friends[i]}`);
}