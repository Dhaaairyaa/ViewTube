import React from "react";

const commentsData = [
  {
    name: "Dhairya",
    text: "nice video good explanation",
    replies: [
      {
        name: "shivam",
        text: "Agree",
      },
      {
        name: "Akshay Saini",
        text: "Thank You",
        replies: [
          //reply ke ander reply
          {
            name: "shivam",
            text: "Agree",
          },
          {
            name: "Akshay Saini",
            text: "Thank You",
            replies: [
              {
                //reply ke ander reply ke ander reply
                name: "shivam",
                text: "Agree",
              },
              {
                name: "Akshay Saini",
                text: "Thank You",
                replies: [
                  //reply ke ander reply ke ander reply  ke ander reply
                  {
                    name: "shivam",
                    text: "Agree",
                  },
                  {
                    name: "Akshay Saini",
                    text: "Thank You",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "chitraksh",
    text: "good video",
  },
  {
    name: "ayush",
    text: "excellent explanation",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-md">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        alt="user"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const commentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border-l-black border-2 ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default commentsContainer;
