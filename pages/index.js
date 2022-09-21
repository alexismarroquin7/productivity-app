import Head from 'next/head'
import { useReducer } from 'react';
import { ColumnList } from '../widgets/ColumnList';
import { v4 as uuid } from "uuid";

const ACTION = {};

const initialState = {
  column: {
    list: [
      {
        id: uuid(),
        title: "Untitled",
        cards: [
          {
            id: uuid(),
            title: "Untitled"
          },
          {
            id: uuid(),
            title: "Untitled"
          },
        ]
      }
    ]
  }
};

const rootReducer = (state, action) => {
  switch (action.type){
    default:
      throw Error(`unkown action.type ${action.type}`);
  }
}; 

export default function Home() {
  
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <div>
      <Head>
        <title>Productivity App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <ColumnList 
        columns={state.column.list}
      />
   
    </div>
  )
}
