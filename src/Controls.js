import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { useClient } from "./settings";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Controls(props) {
	const mute = async (type) => {
		if (type === "audio") {
			await tracks[0].setEnabled(!trackState.audio);
			setTrackState((ps) => {
				return { ...ps, audio: !ps.audio };
			});
		} else if (type === "audio") {
			await tracks[1].setEnabled(!trackState.video);
			setTrackState((ps) => {
				return { ...ps, video: !ps.video };
			});
		}
	};

	const leaveChannel = async () => {
		await client.leave();
		client.removeAllListeners();
		tracks[0].close();
		tracks[1].close();
		setStart(false);
		setinCall(false);
	};

	const client = useClient();
	const { tracks, setStart, setinCall } = props;
	const [trackState, setTrackState] = useState({ video: true, audio: true });

	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item>
				<Button
					variant="contained"
					color={tracksState.audio ? "primary" : "secondary"}
					onClick={() => mute("audio")}
				>
					{tracksState.audio ? <MicIcon /> : <MicOffIcon />}
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color={tracksState.video ? "primary" : "secondary"}
					onClick={() => mute("video")}
				>
					{tracksState.video ? <VideocamIcon /> : <VideocamOffIcon />}
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="default"
					onClick={() => leaveChannel()}
				>
					Leave <ExitToAppIcon />
				</Button>
			</Grid>
		</Grid>
	);
}
