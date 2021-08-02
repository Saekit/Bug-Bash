import { Text } from "./text";

export const Point = ({ point }) => {
  return (
    <div className="point">
      {point.icon}
      <Text style={{color: "white", fontWeight: 500, fontSize: 20}}>{point.text}</Text>
      <Text style={{color: "white", fontWeight: 300, fontSize: 16}}>{point.subText}</Text>
    </div>
  );
};
