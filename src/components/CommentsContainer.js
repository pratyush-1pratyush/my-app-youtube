import React from 'react'

const CommentsData = [
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[
            {
            name:"Pratyush Henry",
            text:"Lorem ipsum dolor sit amet, consectetur adip",
            replies:[
                {
                name:"Pratyush Henry",
                text:"Lorem ipsum dolor sit amet, consectetur adip",
                replies:[
                    {
                    name:"Pratyush Henry",
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    replies:[
                        {
                        name:"Pratyush Henry",
                        text:"Lorem ipsum dolor sit amet, consectetur adip",
                        replies:[
                            {
                            name:"Pratyush Henry",
                            text:"Lorem ipsum dolor sit amet, consectetur adip",
                            replies:[
                            {
                                name:"Pratyush Henry",
                                text:"Lorem ipsum dolor sit amet, consectetur adip",
                                replies:[]
                            
                            },
                         ] 
                        },
                
                        ]
                    },
            
                    ]
                },
        
                ]
            },
    
            ]
        },
        {
            name:"Pratyush Henry",
            text:"Lorem ipsum dolor sit amet, consectetur adip",
            replies:[
    
            ]
        },

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
    {
        name:"Pratyush Henry",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[

        ]
    },
];

const Comment = ({data}) => {

    const {name, text, replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img 
              className='w-12 h-12'
              alt="user"
              src="https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0&h=180"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>

        </div>
    )
}

const CommentsLists = ({ comments }) => {
    return comments.map((comment, index) => (
     <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsLists comments={comment.replies}/>
        </div>
    </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsLists comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer;