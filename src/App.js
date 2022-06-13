import { useEffect, useState } from 'react';
import './App.css';
import SearchFilter from './components/SearchFilter';
import TopStories from './components/TopStories';


function App() {

  const[topStories, setTopStories] = useState([]);
  const[searchResults, setSearchResults] = useState([]);
 


  const getTopStories = () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const linkPromises = data.slice(0,100).map((id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
        .then((response) => {
          return response.json();
        })
        })
      Promise.all(linkPromises)
      .then((links) => {
        console.log(links);
        setTopStories(links)
      })
    });
  }
  
  useEffect(() => {
   getTopStories()
  },[]);

  const handleSearchContent = (searchText) => {
    const stories = topStories.filter((story) => {
      return story.title.toLowerCase().includes(searchText)
    })
    setSearchResults(stories);






    // const titles = topStories.map((story) => {
    //   return story.title
    // })
    // console.log(titles);
    // const resultTitles = titles.filter((title) => {
    //  return title.includes(searchText)
    // })
    // console.log(resultTitles);
    // const resultStorys = topStories.map(function(story) {
    //   if(story.title === resultTitles){
    //     return story.id
    //   }
    // })
    // console.log(resultStorys);
    

      
   
  }


  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src="https://cdn.iconscout.com/icon/free/png-256/hackernews-2752164-2284981.png" alt="" />
        Hacker News
      </header>
      <SearchFilter handleSearchContent={handleSearchContent}/>
      <TopStories topStories={topStories} searchResults={searchResults}/>
    </div>
  );
}

export default App;
