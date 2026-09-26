import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Choose the Learning Experience That Fits You",
  "experiences": [
    {
      "title": "Build & Test Your Knowledge",
      "label": "QUIZZES",
      "text": "Test your understanding of real estate, products, projects, markets, processes and industry fundamentals."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "COURSES",
      "text": "Structured programs covering real estate, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "LIVE CLASSES",
      "text": "Interactive sessions with trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "MOCKS",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations, leadership scenarios and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "WORKSHOPS",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "MENTORING",
      "text": "Work with experienced trainers and mentors on specific skills, career goals and professional challenges."
    }
  ]
};

export const dataTe = {
  "title": "Choose the Learning Experience That Fits You",
  "experiences": [
    {
      "title": "Build & Test Your Knowledge",
      "label": "QUIZZES",
      "text": "Test your understanding of real estate, products, projects, markets, processes and industry fundamentals."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "COURSES",
      "text": "Structured programs covering real estate, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "LIVE CLASSES",
      "text": "Interactive sessions with trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "MOCKS",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations, leadership scenarios and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "WORKSHOPS",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "MENTORING",
      "text": "Work with experienced trainers and mentors on specific skills, career goals and professional challenges."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
