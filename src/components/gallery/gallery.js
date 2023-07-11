import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './galleryCss.css'



export default function TitlebarBelowImageList() {
  return (
    <div>
      <h1 className='g-title'id='feature' >New Feature Items</h1>
    <div className='g-mainContainer'>
    
    {/* <div className='g-mainDetails'>
        <p>jbjbjbhvhvhjvhvjhvjh</p>
    </div> */}
    <ImageList className='g-container' >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img className='gallery-img'
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1594750823491-e493d067ce3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Sea star',
    author: '@peterlaster',
  },
 
];