var pet={
    words:'...',
    speak:function(){
        console.log(this.words);
        console.log(this===pet);            //对于这个函数来说，this就指向pet对象
    }
}
pet.speak();


function pet2(words){
    this.words=words;
    console.log(this.words);
    console.log(this===global);              //对于这个函数来说，this就是nodejs的全局对象global
}
pet2('...');


function Pet3(words){
    this.words=words;
    this.speak=function(){
        console.log(this.words);
        console.log(this===cat);             //对于这个函数来说，this指向的是实例化出的对象cat
    }
}
var cat=new Pet3('Miao');
cat.speak();
