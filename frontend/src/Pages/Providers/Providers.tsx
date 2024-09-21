import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Providers = () => {
	const API_KEY = process.env.REACT_APP_MAPS_API_KEY || "";

	return (
		<APIProvider apiKey={API_KEY}>
			<Map
				style={{ width: "100vw", height: "100vh" }}
				defaultCenter={{ lat: 40.7282, lng: -73.7949 }}
				defaultZoom={12}
				gestureHandling={"greedy"}
				disableDefaultUI={true}
			/>
		</APIProvider>
	);
};

export default Providers;
