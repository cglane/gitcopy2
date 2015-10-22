
var joined = "";
var newMap;
(function iterateToArray(){
   newMap =  _.map(events,function(item){
      return {
        type: item.type,
        username: item.actor.login,
        description: item.payload.description,
        age: item.created_at,
        name: item.repo.name
      };
    });

})();
var splitNames;
var nonDuplicateMap;
  (function splitWords(){
      splitNames = _.map(newMap,function(item){
        var newWord = item.name.split("/");
        //iterate through splitNames
          return {
            name: newWord[1],
            comment: item.description,
            age: item.age,
            type: item.type
          };
      });
  })();

(function date(){
  var str = cglane.created_at;
  var strDate = str.split('T');
  var gregorian = Date(strDate[0]);
  var gregorianArray = gregorian.split(" ");
  joined = " " + gregorianArray[1] + " " + gregorianArray[2]+ " ,  "+ gregorianArray[3];
  console.log(strDate);
  console.log(gregorian);
  console.log(gregorianArray);
})();
$(document).ready(function(){
  //column left
  console.log(avatar);
  $('#avatar').attr('src',cglane.avatar_url);
  $('#login').text(cglane.login);
  $('#joined').append(joined);
  $('#followers').text(cglane.followers);
  $('#stared').text(cglane.public_gists);
  $('#following').text(cglane.following);
  //navbar
  $('#account').attr('src', cglane.avatar_url);
    //icon_dropdown message
    console.log(events);
    console.log(events[10]);
    console.log(arrayRepos);
    console.log(arrayNames);
    console.log(splitNames);
//populate content
var displayNames = _.filter(splitNames,function(currentItem,indx){
  return indx < 8;
});
  displayNames.forEach(function(el) {
    var myTempl = _.template($('#bitterTmpl').html());
    var repoTempl = _.template($('#templateRepositories').html());
    $('.repositories').append(repoTempl(el));
    $('.documents').append(myTempl(el));
    console.log(el);

  });
        //populate repositories

  //populate publicActivity

//event handler click on options
$('.clickDirectory li').on('click',function(event){
  console.log($(this));
  var clickedSelection = "."+ $(this).attr('id');
  console.log(clickedSelection);
  $(clickedSelection).addClass('specialClass');
  $(clickedSelection).siblings().removeClass('specialClass');
});
});
