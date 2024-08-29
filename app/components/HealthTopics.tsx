import React from 'react'
import Topics from './Topics';

function HealthTopics() {

    const healthTopicsList = [
        "ADD/ADHD - Childhood", "ADHD", "Allergies", "Alzheimer's",
        "Ankylosing Spondylitis", "Anxiety Disorders", "Arthritis", "Asthma",
        "Back Pain", "Cancer", "Children's Vaccines", "Cholesterol",
        "Cold, Flu, & Cough", "COPD", "Coronavirus", "Depression",
        "Diabetes", "Digestive Disorders", "Eye Health", "Health & Balance",
        "Heart Health", "Heartburn/GERD", "Hypertension", "Lung Cancer",
        "Mental Health", "Migraines", "Multiple Myeloma", "Multiple Sclerosis",
        "Oral Care", "Orthopedics", "Osteoporosis", "Ovarian Cancer",
        "Prostate Cancer", "Psoriasis", "Rheumatoid Arthritis", "Schizophrenia",
        "Sexual Conditions", "Skin Problems", "Sleep Disorders"
      ];

  return (
    <>
        <Topics topicName='HEALTH A - Z' topics={healthTopicsList} viewAllLink="#"/>
    </>
  )
}

export default HealthTopics