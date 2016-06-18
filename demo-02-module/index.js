var klass=require('./klass.js');
exports.add=function(klasses){
    klasses.forEach(function(item,index){
        var _klass=item;
        var teacherName=_klass.teacherName;
        var students=_klass.students;
        klass.add(teacherName,students);
    })
}
