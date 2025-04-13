import { useEffect, useState } from "react";
import "./App.css";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const title = "Welcome to Reactivities";
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/API/activities")
      .then(response => setActivities(response.data))
      return () => {}
  }, [])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:5000/api/activities');
  //     const data = await response.json();
  return (
    <>
      <Typography variant="h2">
        {title}
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>
              {activity.title}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default App;
