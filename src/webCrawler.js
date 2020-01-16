const webCrawler = function (url){
/* From wikipedia:
A Web crawler starts with a list of URLs to visit, called the seeds. As the crawler visits these URLs, it identifies all the hyperlinks in the pages and adds them to the list of URLs to visit, called the crawl frontier. URLs from the frontier are recursively visited according to a set of policies. If the crawler is performing archiving of websites it copies and saves the information as it goes. The archives are usually stored in such a way they can be viewed, read and navigated as they were on the live web, but are preserved as ‘snapshots'.[4]
The archive is known as the repository and is designed to store and manage the collection of web pages. The repository only stores HTML pages and these pages are stored as distinct files. A repository is similar to any other system that stores data, like a modern day database. The only difference is that a repository does not need all the functionality offered by a database system. The repository stores the most recent version of the web page retrieved by the crawler.[5]
The large volume implies the crawler can only download a limited number of the Web pages within a given time, so it needs to prioritize its downloads. The high rate of change can imply the pages might have already been updated or even deleted.
The number of possible URLs crawled being generated by server-side software has also made it difficult for web crawlers to avoid retrieving duplicate content. Endless combinations of HTTP GET (URL-based) parameters exist, of which only a small selection will actually return unique content. For example, a simple online photo gallery may offer three options to users, as specified through HTTP GET parameters in the URL. If there exist four ways to sort images, three choices of thumbnail size, two file formats, and an option to disable user-provided content, then the same set of content can be accessed with 48 different URLs, all of which may be linked on the site. This mathematical combination creates a problem for crawlers, as they must sort through endless combinations of relatively minor scripted changes in order to retrieve unique content.
As Edwards et al. noted, "Given that the bandwidth for conducting crawls is neither infinite nor free, it is becoming essential to crawl the Web in not only a scalable, but efficient way, if some reasonable measure of quality or freshness is to be maintained."[6] A crawler must carefully choose at each step which pages to visit next.
Tasks:
Accept a URL to begin its crawl
Recursively follow links
Output the URL of crawled pages
Accept an optional configuration object as an argument that will effect the default behavior of the crawler. Consider configuring:
The ability to use getElementsByClassName on any of the pages you visit
The ability to output other kinds of information about the page such as number of script tags, distinct attributes, links to external sites, etc.
The option to crawl breadth first instead of depth first
Limit the depth or breadth of the crawl
Set a revisit or politeness policy
 Refactor the crawler to use web workers 
*/
  
  // make API call of URL
  $.get( url, function( data ) {
    let currentlyCrawling = document.createElement('div');
    currentlyCrawling.innerHTML = data;
    let hyperlinks = currentlyCrawling.getElementsByTagName('a');
    //console.log( "Hyperlinks Loaded: " + hyperlinks[100] );
  });
  
  // based on what that returns, identify all hyperlinks
    // call webCrawler on each hyperlink
  return;
}

console.log(webCrawler("https://www.msn.com/"));
