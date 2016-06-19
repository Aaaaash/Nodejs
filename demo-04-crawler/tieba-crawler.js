var http=require('http');
var cheerio=require('cheerio');
var url='http://tieba.baidu.com/f?fr=search&ie=utf-8&kw=%E6%98%BE%E5%8D%A1';
function filterTie(html){
    var $=cheerio.load(html);
    var courseData=[];
    var ties=$('.j_thread_list');
    ties.each(function(item){
        var tie=$(this);
        var resNum=tie.find('.threadlist_rep_num').text();     //回复数
        var content=tie.find('.j_th_tit').text().split('\r\n')[3];              //帖子标题
        var auther=tie.find('.frs-author-name').text();        //作者
        var tieData={
            resNum:resNum,
            content:content,
            auther:auther
        };
        courseData.push(tieData);
    });
    return courseData;
    // [
    //     {
    //         res:'',
    //         talk:'',
    //         auther:''
    //     }
    // ]
}
function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var resNum=item.resNum;
        var content=item.content;
        var auther=item.auther;
        console.log('['+resNum+']--------   '+content+'    --------    '+auther+'\n');
    })
}
http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(){
        var courseData=filterTie(html);
        // console.log(courseData);
        printCourseInfo(courseData);
    })
}).on('error',function(){
    console.log('出错！');
})
