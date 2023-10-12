import React from "react";

// 회원 질문 기록 페이지(MyChatHistory)에서 각 채팅의 간략한 정보를 한 행으로 표시하는 컴포넌트
// 이 행을 클릭하면 해당 채팅의 상세페이지로 이동
// 상세 페이지는 ChatDetail 컴포넌트
export default function ChatRow({ chat, onRowClick }) {
  const department = chat.messageList[chat.messageList.length - 1].content;

  return (
    <tr onClick={() => onRowClick(chat.chatId)}>
      <td className="text-center">{chat.chatId}</td>
      <td>{chat.memberId}</td>
      <td>{new Date(chat.createDate).toLocaleDateString()}</td>
      <td>{department}</td>
    </tr>
  );
}