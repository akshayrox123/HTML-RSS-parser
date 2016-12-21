function load_rss(target, url){
  $(target).rss(url, {
    limit: 240,
    ssl: true,
    effect: 'show',
    dateFormat: 'MMMM DD, YYYY',
    entryTemplate: 
    "<a class='entry_link' href='{url}' target='_self'>\
      <div class='entry'>\
        <div class='entry_date'>\
          \
          <span class='entry_by'>by: {author}</span>\
          \
        </div>\
        <div class='entry_img'>\
          {teaserImage}\
        </div>\
        <div class='entry_title'>\
          {title}\
        </div>\
        <div class='entry_details'>{shortBody}</div>\
      </div>\
    </a>"
  });
}

$(function(){
  load_rss("#ht", "http://timesofindia.indiatimes.com/rssfeedstopstories.cms");
  load_rss("#tech", "http://www.cnet.com/rss/reviews/");
  load_rss("#random", "http://feeds.feedburner.com/Makeuseof");
  load_rss("#gearth", "http://feeds.feedburner.com/GoogleEarthBlog");
  load_rss("#mashable", "http://feeds.feedburner.com/Mashable");  
  load_rss("#htg", "http://feeds.feedburner.com/HowToGeek");    
  load_rss("#lh", "http://www.lifehack.org/feed");      
  load_rss("#mumbai", "http://epaper.dnaindia.com/feed.aspx?edcode=820009");      

  });