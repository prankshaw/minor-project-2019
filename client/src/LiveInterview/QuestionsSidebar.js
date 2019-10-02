import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class QuestionsSidebar extends Component {
  onClickQues = e => {
    let id = parseInt(e.target.id.split("-")[1]);
    this.props.changeQues(QUESTIONS[id]);
  };

  renderQuestions = () => {
    return QUESTIONS.map((question, id) => (
      <div
        className="question-list-item"
        id={`question-${id}`}
        onClick={this.onClickQues}
      >
        {question}
      </div>
    ));
  };
  render() {
    return (
      <div>
        <Button
          onClick={this.props.toggleSidebar}
          content="Questions"
          color="pink"
        />
        <div className="question-list">
          <h3>Question List:</h3>
          {this.renderQuestions()}
        </div>
      </div>
    );
  }
}

const QUESTIONS = [
  "Introduce Yourself ?",
  "What are your Strengths ?",
  "What are your Weaknesses ?",
  "Where do you see yourself in 5 years ?",
  "Tell me about your Hobbies ?"
];

export default QuestionsSidebar;
