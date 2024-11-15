import React from 'react';

function BandInfo() {
  const band = {
    name: 'The Neighbourhood',
    members: [
      'Jesse Rutherford - Lead Vocals',
      'Jeremy Freedman - Guitar',
      'Zach Abels - Guitar',
      'Mikey Margott - Bass Guitar',
      'Brandon Fried - Drums',
    ],
    albums: [
      {
        title: 'I Love You.',
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Iloveyou_the_neighbourhood.jpeg',
      },
      {
        title: 'Wiped Out!',
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Neighbourhood_-_Wiped_Out.jpg',
      },
      {
        title: 'The Neighbourhood',
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/ec/The_Neighbourhood_-_The_Neighbourhood.jpg',
      },
    ],
  };

  return (
    <div className="band-container">
      <h2 className="band-name">{band.name}</h2>
      <h3>Members:</h3>
      <ul>
        {band.members.map((member, index) => (
          <li key={index} className="band-member">
            {member}
          </li>
        ))}
      </ul>
      <h3>Albums:</h3>
      <div className="albums-container">
        {band.albums.map((album, index) => (
          <div key={index} className="album">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BandInfo;
