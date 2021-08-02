import React, {useState} from "react";
import "../index.css";
import { Text } from "./text";
import {ChevronUp, ChevronDown} from '../assets/svg'

export const Accordian = ({ props }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const onClick = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <div className="accordian">
      <div onClick={onClick} className="accordian-head">
      <Text style={{fontSize: 16, color: "#6c6f72",  fontWight: 500, marginRight: 5}}>{props.question}</Text>
      {showAnswer && <ChevronUp style={{height: 15, color: "#6c6f72"}}/>}
      {!showAnswer && <ChevronDown style={{height: 15, color: "#6c6f72"}}/>}
      </div>
      {showAnswer && 
      <Text style={{fontSize: 15, color: "#6c6f72",  fontWight: 400}}>{props.answer}</Text>
      }
      
    </div>
  );
};
