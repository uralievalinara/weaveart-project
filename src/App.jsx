import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FooterLogo from './components/FooterLogo/FooterLogo';
import TextSection from './components/TextSection/TextSection';
import ArtistSection from './components/ArtistSection/ArtistSection';
import ArtistsWorksSection from './components/ArtistsWorksSection/ArtistsWorksSection';
import Artists from './components/Artists/Artists';
import ArtistsText from './components/ArtistsText/ArtistsText';
import ArtistPersonalPage from './components/ArtistPersonalPage/ArtistPersonalPage';
import ArtPersonalPage from './components/ArtPersonalPage/ArtPersonalPage';
import FramedCanvas from "./components/FramedCanvas/FramedCanvas";
import ClassicFrames from "./components/ClassicFrames/ClassicFrames";
import Events from "./components/Events/Events";
import TermsOfUse from "./components/TermsofUse/TermsofUse";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
 
 const eventsData = [
    { title: "Art Exhibition", description: "A showcase of modern art.", date: "2025-02-15" },
    { title: "Workshop: Painting 101", description: "Learn the basics of painting.", date: "2025-03-01" },
    { title: "New Year Collection", description: "Celebrate the season with festive art.", date: "2025-01-25" },
];

  const artists = [
    { id: 1, name: 'Lopachev Daniel', bio: 'A charming and always.',  photo: 'path/to/photo2.jpg'  },
    { id: 2, name: 'Artist Name 2', bio: 'Bio for Artist 2', photo: 'path/to/photo2.jpg' },
    { id: 3, name: 'Artist Name 3', bio: 'Bio for Artist 3', photo: 'path/to/photo3.jpg' },
   ];
  const ArtistInfoPage = [
    { id: 1, name: 'Lopachev Daniel', bio: 'A charming and always.',  photo: 'path/to/photo2.jpg'  },
    { id: 2, name: 'Artist Name 2', bio: 'Bio for Artist 2', photo: 'path/to/photo2.jpg' },
    { id: 3, name: 'Artist Name 3', bio: 'Bio for Artist 3', photo: 'path/to/photo3.jpg' },
    { id: 4, name: 'Artist Name 4', bio: 'A charming and always.',  photo: 'path/to/photo2.jpg'  },
    { id: 5, name: 'Artist Name 5', bio: 'Bio for Artist 2', photo: 'path/to/photo2.jpg' },
    { id: 6, name: 'Artist Name 6', bio: 'Bio for Artist 3', photo: 'path/to/photo3.jpg' }

   
  ];
  
  const artistsWorks = [
    { id: 1, artistId: 1, topic: 'Abstract', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 2, artistId: 2, topic: 'Landscape', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 3, artistId: 3, topic: 'Portrait', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 4, artistId: 4, topic: 'Still life', price:'$$$', image: 'https://via.placeholder.com/150' },
];
  

  const ArtistsPage = [
    { id:1, name: 'Artist Name 1', photo: 'https://via.placeholder.com/150' },
    { id:2, name: 'Artist Name 2', photo: 'https://via.placeholder.com/150' },
    { id:3, name: 'Artist Name 3', photo: 'https://via.placeholder.com/150' },
    { id:4, name: 'Artist Name 4', photo: 'https://via.placeholder.com/150' },
    { id:5, name: 'Artist Name 5', photo: 'https://via.placeholder.com/150' },
    { id:6, name: 'Artist Name 6', photo: 'https://via.placeholder.com/150' },
    { id:7, name: 'Artist Name 7', photo: 'https://via.placeholder.com/150' },
    { id:8, name: 'Artist Name 8', photo: 'https://via.placeholder.com/150' }
  ];
  const framedItems = [
    { artist: "Example", topic: "Example", price: "$$$", image: "https://via.placeholder.com/250" },
    { artist: "Example", topic: "Example", price: "$$$", image: "https://via.placeholder.com/250" },
    { artist: "Example", topic: "Example", price: "$$$", image: "https://via.placeholder.com/250" },
    { artist: "Example", topic: "Example", price: "$$$", image: "https://via.placeholder.com/250" },
  ];
  const classicItems = [
    { artist: "Example", topic: "Landscape", price: "$50", image: "https://via.placeholder.com/250" },
    { artist: "Example", topic: "Portrait", price: "$75", image: "https://via.placeholder.com/250" },
    { artist: "Example", topic: "Abstract", price: "$60", image: "https://via.placeholder.com/250" },
  ];

  return (
    <Router>
      <Header />
      <Switch>
        {/* Home Page */}
        <Route
          exact
          path="/"
          component={() => (
            <>
              <TextSection />
              <ArtistSection artists={artists} />
              <ArtistsWorksSection artistsWorks={artistsWorks} />
              <FooterLogo />
              <Footer />
            </>
          )}
        />
        
        {/* Artist Page */}
        <Route
          path="/artist"
          component={() => (
            <>
              <Artists ArtistsPage={ArtistsPage} />
              <ArtistsText />
              <FooterLogo />
              <Footer />

            </>
          )}
        />
        <Route exact path="/artist" component={() => <ArtistSection artists={artists} />} />
        <Route
          path="/artistpersonalpage/:artistId"
          component={() => (
            <>
              <ArtistPersonalPage ArtistInfoPage={ArtistInfoPage} works={artistsWorks} />
              <FooterLogo />
              <Footer />

            </>
          )}
             
        />
           <Route
          path="/artpersonalpage/:workId"
          component={() => (
            <>
              <ArtPersonalPage works={artistsWorks} artists={artists}  />
              <FooterLogo />
              <Footer />
            </>
          )}
        />
         <Route
          path="/framed-canvas"
          component={() => <FramedCanvas items={framedItems} />}
           />
         <Route
          path="/classic-frames"
          component={() => <ClassicFrames items={classicItems} />}
         />
        <Route
          path="/events"
          component={() => <Events events={eventsData} />}
        />
     
      <Route 
        path="/terms" 
        component={() => (
          <>
            <TermsOfUse />
            <Footer />
          </>
        )}
      />
       <Route 
        path="/about" 
        component={() => (
          <>
            <AboutUs />
            <Footer />
          </>
        )}
      />

     
      
        
          
      </Switch>
    </Router>
  );
}

export default App;
