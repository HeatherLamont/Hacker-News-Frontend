const TopStories = ({topStories, searchResults}) => {
    return ( 
        <div className="storieslist-div">
            <div className="result-stories">
                <h2>Search Results</h2>
                {searchResults.map((story) => {
                  return(
                    <div className="story-div">
                    <h3>{story.title}</h3>
                    <a className="App-link" href={story.url}>Read more...</a>

                    </div>

                  )
                })}
            </div>
            <div className="top-stories">
                <h2>Top Stories</h2>
                {topStories.map((story) => {
                return (
                    <div className="story-div">
                    <h3>{story.title}</h3>
                    <a className="App-link" href={story.url}>Read more...</a>

                    </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default TopStories;