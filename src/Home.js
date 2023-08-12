import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const SubHeading = styled.h3`
  font-size: 24px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const List = styled.ul`
  font-size: 18px;
  list-style: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const NumberedList = styled.ol`
  font-size: 18px;
  list-style: decimal;
  margin-left: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Welcome to Timr.</Heading>
      <Paragraph>
        Stay organized and manage your time effectively with our Timr..
        Whether you need a stopwatch for precise timing, an alarm to remind you
        of important tasks, or an interval timer for efficient work sessions,
        we've got you covered.
      </Paragraph>

      <SubHeading>Features</SubHeading>
      <List>
        <ListItem>
          <strong>Stopwatch:</strong> Measure time with accuracy using our
          easy-to-use stopwatch feature. Perfect for timing activities,
          workouts, and more.
        </ListItem>
        <ListItem>
          <strong>Alarm:</strong> Set up custom alarms to get notified when it's
          time for meetings, appointments, or any other important events.
        </ListItem>
        <ListItem>
          <strong>Interval Timer:</strong> Boost your productivity with an
          interval timer. Define work and break periods to maintain focus and
          manage your tasks effectively.
        </ListItem>
      </List>

      <SubHeading>How to Use</SubHeading>
      <Paragraph>Using our Timr. is simple:</Paragraph>
      <NumberedList>
        <ListItem>Select the timer you need from the navigation bar.</ListItem>
        <ListItem>
          Follow the on-screen instructions to set your desired time or
          intervals.
        </ListItem>
        <ListItem>Click the start button to begin the timer.</ListItem>
        <ListItem>Pause, reset, or stop the timer as needed.</ListItem>
      </NumberedList>

      <Paragraph>
        Experience a new level of time management and organization with our
        Timr.. Get started now and make the most of every moment!
      </Paragraph>
    </Container>
  );
};

export default Home;
