import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
`

const Title = styled.h5`
  text-transform: uppercase;
  color: #0F3875;
  font-size: .7em;
  letter-spacing: .7em;
  margin: 30px 0 10px 0;
`

const DroppableColumn = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 0 10px;
  width: 250px;;
  min-height: 500px;
`

const DraggableItem = styled.div`
  user-select: none;
  font-size: .8em;
  padding: 16px;
  margin: 10px 0;
  minHeight: 50px;
  background-color: #FFFFFF;
  border: 1px solid #E94D4D;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #B9B9B9;
  ...provided.draggableProps.style;
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`

export default function Board({ jobs, user, saveBoard }) {
  const [formData, setFormData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [items, setItems] = useState(
    jobs.map(job => {
      return ({
        ...job,
        itemId: uuid()
      })
    }))
    
    // useEffect(() => {
    //   setItems(
    //     jobs.map(job => {
    //       return ({
    //         ...job,
    //         itemId: uuid()
    //       })
    //     })
    //   )
    // }, [jobs])

  // let items= []

  // // useEffect(() => {
  // //   setItems(prev => {
  // //     prev.map(job => {
  // //       return ({
  // //         ...job,
  // //         itemId: uuid(),
  // //       })
  // //   })
  // // }, [formData])}

  // if (jobs) {
  //   items = jobs.map(job => {
  //     return ({
  //       ...job,
  //       itemId: uuid(),
  //     })
  //   })
  // }
  
  const [columns, setColumns] = useState({
  '100000': {
    name: 'wishlist',
    items: items.filter(item => item.column === 'wishlist')
  },
  '200000': {
    name: 'applied',
    items: items.filter(item => item.column === 'applied')
  },
  '300000': {
    name: 'interviews',
    items: items.filter(item => item.column === 'interviews')
  },
  '400000': {
    name: 'offers',
    items: items.filter(item => item.column === 'offers')
  }});

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    let job = items.find(item => item.itemId === draggableId)

    setFormData({
      ...job,
      "column": columns[destination.droppableId].name
    })

    setToggle(prev => !prev)

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

  useEffect(() => {
      // const updateColumn = async() => {
        console.log(formData)
        saveBoard(formData?.id, formData)
      // }
      // updateColumn()
      
  }, [formData, toggle])

  const handleClick = () => {
    console.log('hi')
  }

  return (
    <Container>
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
                      <DroppableColumn
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                          ? "#FEDFCD"
                          : "#FFF4EE"}}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.itemId}
                              draggableId={item.itemId}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <DraggableItem
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    onClick={handleClick}
                                    
                                  >
                                    <DetailsText>{item.company}</DetailsText>
                                    <DetailsText>{item.position}</DetailsText>
                                  </DraggableItem>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </DroppableColumn>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </Container>
  )
}
