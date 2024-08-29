import React from 'react'
import Topics from './Topics';
function ConditionTopics() {

    const healthTopicsList = [
        "Colorectal Cancer", "Sleep Disorder", "Eczema", "Psoriatic Arthritis",
        "Women's Health", "Ovarian Cancer", "Heart Disease", "Cancer",
      ];

  return (
    <>
        <Topics topicName='CONDITIONS' topics={healthTopicsList} viewAllLink="#"/>
    </>
  )
}

export default ConditionTopics