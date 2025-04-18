import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const { deleteActivity } = useActivities();

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle2">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardContent
        sx={{ display: "flex", justifyContent: "space-between", pb: 3 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box>
          <Button
            component={Link}
            to={`/activities/${activity.id}`}
            size="medium"
            variant="contained"
          >
            View
          </Button>
          <Button
            onClick={() => deleteActivity.mutate(activity.id)}
            size="medium"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
