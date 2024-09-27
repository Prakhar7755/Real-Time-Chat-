import UserInfo from "./userInfo/UserInfo.jsx";
import ChatList from "./chatList/ChatList.jsx";
import "./list.css";

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
