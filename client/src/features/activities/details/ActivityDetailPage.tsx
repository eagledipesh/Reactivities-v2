import { Grid, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useParams } from "react-router";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSideBar from "./ActivityDetailSideBar";
import ActivityDetailInfo from "./ActivityDetaiInfo";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loding...</Typography>;

  if (!activity) return <Typography>Loding...</Typography>;
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityDetailHeader activity={activity}/>
        <ActivityDetailInfo activity={activity}/>
        <ActivityDetailChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailSideBar />
      </Grid>
    </Grid>
  );
}
