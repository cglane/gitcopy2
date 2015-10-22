var arrayRepos = _.map(events,function(items){
  return items.repo;
});
var arrayNames = _.pluck(arrayRepos,'name');

var calendarUrl = cglane.events_url;
//fullData Set
