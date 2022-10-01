// import logo from './logo.svg';
import { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import GoodAnswerDescription from "./GoodAnswerDesc";
import GoodAnswerComponents from "./GoodAnswerComps";
import Home from "./Home";
import { render } from "@testing-library/react";
import React from 'react';

const InterviewData = [
  {
    Question: "Beyond basic duties, tell me about what role you see the administrative assistant serving in the office.",
    GoodAnswerDescription: "The goal is to make sure the candidate understands themselves as a holistic part of a functioning office.",
    GoodAnswerComponents: [
      'Do they have a passion for doing the job well?',
      'Do they see themselves as making the entire office function better?',
      'Do they know how to fit into a larger team?'
    ],
    ExampleAnswer: "The administrative assistant might seem like someone whose job is simply keeping everything filed and organized and scheduled. But they actually are the building block of the entire office, making everyone’s lives function more smoothly and with good access to information when they need it."
  }, 
  {
    Question: "Why would an executive select you over someone else to be their administrative assistant? What makes you different?",
    GoodAnswerDescription: "The goal is to see if this candidate excels at their job and knows how to do that.",
    GoodAnswerComponents: [
      'Do they know why they are better at their job?',
      'Do they have a concrete sense of the skills needed to be exceptional?',
      'Are they confident they are the best?'
    ],
    ExampleAnswer: "I see being an administrative assistant as a crucial piece of the functioning of an entire office, and it is my job to make that happen. I am tremendously organized, enjoy making things flow more smoothly and have 10 years of experience doing this. I stay in this career because I love doing it."
  }, 
  {
    Question: "Tell me about a situation in which you needed to maintain discretion and did so successfully.",
    GoodAnswerDescription: "The goal is to see if this candidate can manage complex office situations.",
    GoodAnswerComponents: [
      'Do they have a strong sense of discretion?',
      'Do they have the creativity to work through complex situations?',
      'Are the confident in a delicate situation?'
    ],
    ExampleAnswer: 'I was working for an executive who needed to schedule a meeting with a competitor of a client. I was able to discover through a phone call to a friend in the client’s office that the client lunched at a particular place, and so I made sure to schedule the lunch meeting in a different location far from where the client would be.'
  }, 
  {
    Question: "What is the most difficult part of your job?",
    GoodAnswerDescription: "The goal of the question is to discover the pain points for this candidate.",
    GoodAnswerComponents: [
      'Do they know what is difficult for them?',
      'Do they know to work through the difficulty?',
      'Can they deal with adversity?'
    ],
    ExampleAnswer: "Sometimes I have so many things crossing my desk at a given time that I can get a bit overwhelmed. When this happens I take a deep breath and focus on prioritizing the work. Then I get a clear head again and can dive back in."
  }, 
  {
    Question: "What do you enjoy most about being an administrative assistant?",
    GoodAnswerDescription: "The goal of the question is to find out if they enjoy the work.",
    GoodAnswerComponents: [
      'Do they find joy in their job?',
      'What are their interests as far as types of work go?',
      'Do they know what is easy or fun for them?'
    ],
    ExampleAnswer: "The joy of being an administrative assistant is being at the center of the action, all the time. I always know what’s going on in the office, and that gives me a chance to assist at making any important events happen more smoothly."
  }, 
  {
    Question: "What types of software do you use and know?",
    GoodAnswerDescription: "The goal is to find out what kinds of software the candidate has proficiency with.",
    GoodAnswerComponents: [
      'Are they up to date with current administrative software?',
      'Are they confident about using software?',
      'Are there any gaps in their software experience?'
    ],
    ExampleAnswer: "I’ve been a PC user since childhood so I am very good with IT and enjoy using the computer. I use all Microsoft Office products, can create spreadsheets and also use Word documents. I’ve been using Slack for two years. I also know how to interact with the cloud, whether in Google, Microsoft or Apple products."
  }, 
  {
    Question: "How do you deal with someone in the office you don’t get along with?",
    GoodAnswerDescription: "The goal is to find out how the candidate manages interpersonal conflict.",
    GoodAnswerComponents: [
      'Are they able to overcome personal differences?',
      'Are they focused on the business rather than personal conflicts?',
      'Are they socially skilled?'
    ],
    ExampleAnswer: "I don’t usually have trouble getting along with anyone in the office. However, if a personal conflict arises, I stay focused on the business needs and accomplishing those purposes. Usually if someone realizes I am focused on the business and not on petty personal stuff, the situation resolves and the conflict is eliminated."
  }, 
  {
    Question: "Have you ever received a call from an upset client? How did you handle the situation in a professional manner?",
    GoodAnswerDescription: "Administrative assistants receive calls from business partners, company employees and clients throughout the day. It is their job to maintain a professional and personable manner when interacting with these individuals. This question helps the interviewer determine whether an administrative assistant has the right qualities to represent their company and assist callers with their inquiries. It also allows the interviewer to learn more about a candidate's professional background and whether they have the necessary experiences to perform the role of an administrative assistant.",
    GoodAnswerComponents: [
      'Customer service skills',
      'Problem-solving skills',
      'Professionalism'
    ],
    ExampleAnswer: "In my previous role as a receptionist, I would occasionally receive phone calls from concerned or upset clients. I learned that in these situations, it's best to give the caller a chance to explain their situation and reasons for being upset. Once they conclude their message, I make sure to apologize on behalf of the company and provide them with a few different options. Typically, I offer to transfer the client to the customer service department, but in other situations, I set up a meeting time for them and a manager."
  }
]

function getRandomObjFromArr(array) {
  return Math.floor(Math.random() * array.length);
} 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {randomQandA: {}}
  }
  fillContent() {
    this.setState({randomQandA: InterviewData[getRandomObjFromArr(InterviewData)]});
  }
  render() {
  return (
    <div className="App">
      <button onClick={() => this.fillContent()}>Start Quizzing</button>
      <Question value={this.state.randomQandA.Question}></Question>
      <textarea name="myAnswer" id="myAnswer" cols="30" rows="30">Enter Response</textarea>
      <GoodAnswerDescription value={this.state.randomQandA.GoodAnswerDescription}></GoodAnswerDescription>
      {/* <GoodAnswerComponents value={this.state.randomQandA.GoodAnswerComponents}></GoodAnswerComponents> */}
      <Answer value={this.state.randomQandA.ExampleAnswer}></Answer>
    </div>
  ); 
  }
}


export default App;
