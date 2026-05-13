import { APIProvider, Map } from "@vis.gl/react-google-maps";


const MapGoogleApp = () => {
    // https://visgl.github.io/react-google-maps/docs/get-started
    // npm install @vis.gl/react-google-maps

    return (
        <APIProvider apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" >
            <h1 className="text-xl font-bold text-center my-4">Google Map</h1>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                defaultZoom={3}
                gestureHandling='greedy'
                disableDefaultUI
            />
        </APIProvider>
    );
};

export default MapGoogleApp;