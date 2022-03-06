import { Button, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const [modalVisible, setmodalVisible] = useState(false)
  const {fetchGuests, createEvent, fetchEvents} = useActions()
  const {guests, events} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.authReducer)
  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: IEvent) => {
    setmodalVisible(false);
    createEvent(event)
  }

  return (
   <div>
       <EventCalendar events={events}/>
       <Row justify="center">
          <Button
            onClick={() => setmodalVisible(true)}
          >Add event</Button>
       </Row>
       <Modal
        title='EVENT'
        visible={modalVisible}
        footer={null}
        onCancel={() => setmodalVisible(false)}
       >
         <EventForm 
            guests={guests}
            submit={addNewEvent}
         />
       </Modal>
   </div>
  );
};

export default Event;
