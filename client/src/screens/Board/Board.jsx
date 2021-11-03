import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";

const Title = styled.h5`
  text-transform: uppercase;
  color: #0F3875;
  font-size: .7em;
  letter-spacing: .7em;
  margin: 30px 0 10px 0;
`
const DraggableItems = styled.div`
  user-select: none;
  font-size: .8em;
  padding: 16px;
  margin: 0 0 8px 0;
  minHeight: 50px;
  background-color: #FFFFFF;
  border: 1px solid #E94D4D;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #B9B9B9;
  ...provided.draggableProps.style;
`

export default function Board({ jobs, user }) {
  let items = []

  if (jobs) {
    items = jobs.map(job => {
      return ({
        ...job,
        id: uuid(),
        content: job.company
      })
    })
  }
  
  const [columns, setColumns] = useState({[uuid()]: {
    name: "wishlist",
    items: items
  },
  [uuid()]: {
    name: "applied",
    items: []
  },
  [uuid()]: {
    name: "interviews",
    items: []
  },
  [uuid()]: {
    name: "offers",
    items: []
  }});

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  const handleClick = () => {
    console.log('hi')
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <Title>{column.name}</Title>
              <div style={{ margin: "0px 8px" }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          borderRadius: 5,
                          background: snapshot.isDraggingOver
                            ? "#FEDFCD"
                            : "#FFF4EE",
                          padding: 10,
                          width: 250,
                          minHeight: 500
                        }}
                      >{console.log(provided, snapshot)}
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <DraggableItems
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    onClick={handleClick}
                                    
                                  >
                                    {item.content}
                                  </DraggableItems>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  )
}
