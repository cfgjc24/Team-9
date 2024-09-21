import { useEffect, useState } from "react";
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Pin,
	InfoWindow,
} from "@vis.gl/react-google-maps";
import { getAllMapClients } from "../../Services/ProvidersService";

interface Row {
	name: string;
	latitude: string;
	longitude: string;
}

export default function Intro() {
	const position = { lat: 40.7282, lng: -73.7949 };
	const [open, setOpen] = useState(false);
	const [rows, setRows] = useState<Row[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [lat, setLat] = useState<number>(0);
	const [lng, setLng] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const apiKey = process.env.REACT_APP_MAPS_API_KEY!;
	const mapId = process.env.REACT_APP_MapID;
	useEffect(() => {
		const getCli = async (): Promise<void> => {
			const res = await getAllMapClients();
			setRows(res);
			setIsLoading(false);
		};
		setIsLoading(true);
		getCli();
	}, []);
	const handleOpen = (name: string, lat: string, long: string) => {
		setName(name);
		setLat(Number(lat));
		setLng(Number(long));

		setOpen(true);
	};
	return isLoading ? (
		<div>Loading...</div>
	) : (
		<APIProvider apiKey={apiKey}>
			<div style={{ height: "100vh", width: "100%" }}>
				<Map defaultZoom={12} defaultCenter={position} mapId={mapId}>
					{rows.map(
						(row: any, index: number) =>
							row.latitude !== "null" &&
							row.longitude !== "null" && (
								<AdvancedMarker
									position={{
										lat: Number(row.latitude),
										lng: Number(row.longitude),
									}}
									onClick={() =>
										handleOpen(row.name, row.latitude, row.longitude)
									}
									key={index}
								>
									<Pin
										background={"grey"}
										borderColor={"green"}
										glyphColor={"purple"}
									/>
								</AdvancedMarker>
							)
					)}
					{open && (
						<InfoWindow
							position={{lat: lat, lng: lng}}
							onCloseClick={() => setOpen(false)}
						>
							<p>{name} is at {lat}, {lng}</p>
						</InfoWindow>
					)}
				</Map>
			</div>
		</APIProvider>
	);
}
