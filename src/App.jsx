import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { 
  TextSection, ArtistSection, ArtistsWorksSection, Artists, 
  ArtistsText, ArtistPersonalPage, ArtPersonalPage, FramedCanvas, 
  ClassicFrames, Events, TermsOfUse, AboutUs, Blog 
} from './components';

function App() {
  // Данные о художниках и работах (можно вынести в `context`)
  const artists = [
    { id: 1, name: 'Lopachev Daniel', bio: 'A charming and always.', photo: 'path/to/photo2.jpg' },
    { id: 2, name: 'Artist Name 2', bio: 'Bio for Artist 2', photo: 'path/to/photo2.jpg' },
    { id: 3, name: 'Artist Name 3', bio: 'Bio for Artist 3', photo: 'path/to/photo3.jpg' },
  ];

  const artistsWorks = [
    { id: 1, artistId: 1, topic: 'Abstract', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 2, artistId: 2, topic: 'Landscape', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 3, artistId: 3, topic: 'Portrait', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 1, artistId: 1, topic: 'Abstract', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 2, artistId: 2, topic: 'Landscape', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 3, artistId: 3, topic: 'Portrait', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 1, artistId: 1, topic: 'Abstract', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 2, artistId: 2, topic: 'Landscape', price: '$$$', image: 'https://via.placeholder.com/150' },
    { id: 3, artistId: 3, topic: 'Portrait', price: '$$$', image: 'https://via.placeholder.com/150' }
  ];

  
  return (
    <Router>
      <Routes>
        {/* Layout будет оборачивать все страницы */}
        <Route path="/" element={<Layout />}>
          <Route index element={<><TextSection /><ArtistSection artists={artists} /><ArtistsWorksSection artistsWorks={artistsWorks} /></>} />
          <Route path="artist" element={<><Artists ArtistsPage={artists} /><ArtistsText /></>} />
          <Route path="artistpersonalpage/:artistId" element={<ArtistPersonalPage ArtistInfoPage={artists} works={artistsWorks}/>} />
          <Route path="artpersonalpage/:workId" element={<ArtPersonalPage works={artistsWorks} artists={artists} />} />

          <Route path="framed-canvas" element={<FramedCanvas />} />
          <Route path="classic-frames" element={<ClassicFrames />} />
          <Route path="events" element={<Events />} />
          <Route path="terms" element={<TermsOfUse />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
