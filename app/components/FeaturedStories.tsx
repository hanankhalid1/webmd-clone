import React from 'react'
import Section from './Section';

function FeaturedStories() {

    const items = [
        {
          imageUrl: '/sickwoman.jpg',
          mainHeading: 'Creating A Plan For Your Treatment And Well-Being',
          paragraphContent: 'Find out how to build a treatment plan with your doctor plus how to manage your overall health while living with myasthenia gravis.',
        },
        {
          imageUrl: '/pharmacies.jpg',
          mainHeading: 'Healthy Bacteria For Your Digestive System',
          paragraphContent: 'Learn about the benefits of probiotics for adults and children plus top foods with this "good bacteria".',
        },
        {
          imageUrl: '/friendstalking.jpg',
          mainHeading: 'Dermatologists Offer Tips For Skin Care And Skin Concerns',
          paragraphContent: 'Get guidance from experts regarding skin issues, ranging from eczema and sensitive skin to sunburns.',
        },
      ];


  return (
    <Section title='FEATURED STORIES' items={items}/>
  )
}

export default FeaturedStories