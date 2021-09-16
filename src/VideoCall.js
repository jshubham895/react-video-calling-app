import { useState, useEffect } from "react";
import {
	channelName,
	config,
	useClient,
	useMicrophoneAndCameraTracks
} from "./settings";
import { Grid } from "@material-ui/core";

export default function VideoCall(props) {
	const { setInCall } = props;
	const [users, setUsers] = useState([]);
	const [start, setStart] = useState(false);
	const client = useClient();
	const { ready, tracks } = useMicrophoneAndCameraTracks();

	useEffect(() => {
		let init = async (name) => {};
	}, [channelName, client, ready, tracks]);
}
