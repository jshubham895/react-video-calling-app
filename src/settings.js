import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "faf7b0849e69467db98d2627016cbc16";
const token =
	"006faf7b0849e69467db98d2627016cbc16IAAAb7/pNNH2NYcd9CaGJ7A15dCYmO2OkK3U/93bLzEGKQx+f9gAAAAAEADkBngOqslEYQEAAQCpyURh";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "test";
