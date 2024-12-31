import { FaHeart } from "react-icons/fa";

interface Props {
  color: string;
  onClick: () => void;
}

const Like = ({ color, onClick }: Props) => {
  return (
    <div>
      <FaHeart color={color} onClick={onClick} />
    </div>
  );
};

export default Like;
