import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";
import add from '../../assets/add-icon.svg'
import JobCreate from "../../components/JobCreate/JobCreate";

const BoardContainer = styled.div`
  display: flex;
  justify-items: start;
  align-items: start;
  padding: 0 5px;
  height: 90%;
  width: 90%;
  margin: 5px;
  overflow-x: auto;

  @media (max-width: 425px) {
    height: 80%;
  }
`

const Title = styled.h5`
  text-transform: uppercase;
  color: #0F3875;
  font-size: .7em;
  letter-spacing: .7em;
  margin: 30px 0 10px 0;
`

const PageTitle = styled.h4`
  text-transform: uppercase;
  justify-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: .7em;
  align-self: start;
  margin: 20px 0 0 20px;

  @media (max-width: 425px) {
    
  }
`

const HelperText = styled.div`
  align-self: start;
  font-style: italic;
  font-size: .7em;
  color: #0F3875;
  margin-left: 20px;
`

const DroppableColumn = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 0 10px;
  width: 250px;
  height: 600px;

  @media (max-width: 425px) {
    height: 450px;
    width: 200px;
  }
`

const ShowMore = styled.ul`
  margin: 5px 0 0 0;
`

const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const DetailsText = styled.div`
  text-align: left;
  font-size: .7em;
  line-height: 1.7em;
`

const DetailsTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .3em;
  text-align: left;
  font-size: .7em;
  line-height: 1.7em;
`

const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: #0F3875;
  opacity: .5;
`

const DraggableItem = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  font-size: .8em;
  padding: 16px;
  margin: 10px 0;
  minHeight: 50px;
  background-color: #FFFFFF;
  background-image: ${props => 
    props.priority === '3' ? 'linear-gradient(90deg, #E94D4D 2%, #FFFFFF 0)' :
    props.priority === '2' ? 'linear-gradient(90deg, #F4C78E 2%, #FFFFFF 0)' : 
    'linear-gradient(90deg, #0F3875 2%, #FFFFFF 0)'};
  border: ${props => 
    props.priority === '3' ? '1px solid #E94D4D' :
    props.priority === '2' ? '1px solid #F4C78E' : 
    '1px solid #0F3875'};
  border-radius: 5px;
  box-shadow: 2px 2px 2px #B9B9B9;
  ...provided.draggableProps.style;
`

export default function Board({ jobs, user, saveBoard, newJob }) {
  const [formData, setFormData] = useState(null)
  const [showAddJobModal, setShowAddJobModal] = useState(false)
  const [columnId, setColumnId] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const [items, setItems] = useState(null)
  const [detailsId, setDetailsId] = useState(null)

  useEffect(() => {
    setItems(jobs?.map(job => {
      return ({
        ...job,
        itemId: uuid()
      })
    }))
  }, [jobs])

  
  const [columns, setColumns] = useState({
  '100000': {
    name: 'wishlist',
    items: items?.filter(item => item.column === 'wishlist')
  },
  '200000': {
    name: 'applied',
    items: items?.filter(item => item.column === 'applied')
  },
  '300000': {
    name: 'interviews',
    items: items?.filter(item => item.column === 'interviews')
  },
  '400000': {
    name: 'offers',
    items: items?.filter(item => item.column === 'offers')
  }});

  useEffect(() => {
    setColumns({
      '100000': {
        name: 'wishlist',
        items: items?.filter(item => item.column === 'wishlist')
      },
      '200000': {
        name: 'applied',
        items: items?.filter(item => item.column === 'applied')
      },
      '300000': {
        name: 'interviews',
        items: items?.filter(item => item.column === 'interviews')
      },
      '400000': {
        name: 'offers',
        items: items?.filter(item => item.column === 'offers')
      }})
  }, [items])
  

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    let job = items.find(item => item.itemId === draggableId)

    setFormData({
      ...job,
      "column": columns[destination.droppableId].name
    })

    

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
      saveBoard(formData?.id, formData)
  }, [formData])

  const handleClick = (id) => {
    setShowMore(prev => !prev)
    setDetailsId(id)
  }

  const handleAdd = (id) => {
    let columnName = columns?.[id].name
    setColumnId(columnName)
    setShowAddJobModal(prev => !prev)
  }

  return (
    <>
      <PageTitle>All Jobs</PageTitle>
      <HelperText>drag items, click to see details</HelperText>
      <BoardContainer>
        {!jobs ? 'Loading...' :
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
                          <div onClick={() => handleAdd(columnId)}><AddIcon src={add} alt='add job' /></div>
                          {column.items?.map((item, index) => {
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
                                      onClick={() => handleClick(item.id)}
                                      priority={item.priority}
                                    >
                                      <DetailsDiv>
                                        <DetailsTitle>{item.company}</DetailsTitle>
                                        <DetailsText>{column.name==='applied' ? item.applied :
                                          column.name==='interview' ? item.interview :
                                          column.name==='offer' ? item.offer :
                                          ''}  
                                        </DetailsText>
                                      </DetailsDiv>
                                      <DetailsDiv>
                                        <DetailsText>{item.position}</DetailsText>
                                      </DetailsDiv>
                                        {showMore && detailsId === item.id ? (
                                          <ShowMore>

                                            <DetailsText>Location: {item.location}</DetailsText>
                                            <DetailsText>Salary: {item.salary}</DetailsText>
                                            
                                            <DetailsText>
                                              {column.name==='interviews' ? (
                                                <>
                                                  Applied: {item.applied} </>) :
                                                column.name==='offers' ? (
                                                  <>
                                                    Applied: {item.applied}<br/>
                                                    Interviewed: {item.interview}
                                                  </>) :
                                                ''}  
                                            </DetailsText>
                                          </ShowMore>
                                          
                                        ) : ''}
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
        </DragDropContext>}
        {showAddJobModal ? (
          <>
            <Overlay>/</Overlay>
            <JobCreate 
              user={user} 
              newJob={newJob} 
              setShowAddJobModal={setShowAddJobModal}
              columnId={columnId}/>
          </>) : ''}
      </BoardContainer>
    </>
  )
}
