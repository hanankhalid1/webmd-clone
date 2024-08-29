import React from 'react'
import Section from './Section';

function SpecialSection() {

    const items = [
        {
          imageUrl: '/doctor.jpg',
          smallHeading: 'Content on Myasthenia Gravis',
          mainHeading: 'Creating A Plan For Your Treatment And Well-Being',
          paragraphContent: 'Find out how to build a treatment plan with your doctor plus how to manage your overall health while living with myasthenia gravis.',
        },
        {
          imageUrl: '/reading.jpg',
          smallHeading: 'Spotlight on Probiotics',
          mainHeading: 'Healthy Bacteria For Your Digestive System',
          paragraphContent: 'Learn about the benefits of probiotics for adults and children plus top foods with this "good bacteria".',
        },
        {
          imageUrl: '/cancer.jpg',
          smallHeading: 'Content on Skin Care',
          mainHeading: 'Dermatologists Offer Tips For Skin Care And Skin Concerns',
          paragraphContent: 'Get guidance from experts regarding skin issues, ranging from eczema and sensitive skin to sunburns.',
        },
      ];

  return (
    <Section title='SPECIAL SECTION' items={items}/>
  )
}

export default SpecialSection