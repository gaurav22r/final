// import awsIot from "aws-iot-device-sdk";

// // AWS IoT Core Device Configuration
// // const device = awsIot.device({
// //     keyPath: "private.pem.key", // Path to your private key
// //     certPath: "certificate.pem.crt", // Path to your certificate
// //     caPath: "AmazonRootCA1.pem", // AWS IoT Root CA
// //     clientId: "dashboard_client", // Unique Client ID
// //     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com", // AWS IoT Core endpoint
// // });

// const device = awsIot.device({
//     keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
//     certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
//     caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
//     clientId: "Testdata",
//     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
// });

// // Connect to AWS IoT Core
// device.on("connect", () => {
//     console.log("✅ Connected to AWS IoT Core");
//     device.subscribe("newpol1"); // Subscribe to the topic
//     console.log("📡 Subscribed to topic: newpol1");
// });

// // Event listener for receiving messages
// device.on("message", (topic, payload) => {
//     console.log(`📥 Received message on topic '${topic}': ${payload.toString()}`);

//     // Convert payload from buffer to JSON
//     try {
//         const data = JSON.parse(payload.toString());
//         console.log("📊 Real-time Data Received:", data);
//     } catch (error) {
//         console.error("❌ Error parsing received data:", error);
//     }
// });

// import awsIot from "aws-iot-device-sdk";

// // AWS IoT Core Device Configuration
// const device = awsIot.device({
//     keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
//     certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
//     caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
//     clientId: "Testdata",
//     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
//     keepalive: 60,
// });

// // Connect to AWS IoT Core
// device.on("connect", () => {
//     console.log("✅ Connected to AWS IoT Core");
//     device.subscribe("newpol", (err, granted) => {
//         if (err) {
//             console.error("❌ Subscription Error:", err);
//         } else {
//             console.log("📡 Subscribed to topic:", granted[0].topic);
//         }
//     });
// });

// // Debugging Event Listeners
// device.on("error", (error) => {
//     console.error("❌ Device Error:", error);
// });

// device.on("close", () => {
//     console.warn("⚠️ Connection closed");
// });

// device.on("reconnect", () => {
//     console.warn("🔄 Reconnecting...");
// });

// device.on("offline", () => {
//     console.warn("🚫 Device went offline");
// });

// // Event listener for receiving messages
// device.on("message", (topic, payload) => {
//     console.log(`📥 Received message on topic '${topic}': ${payload.toString()}`);

//     try {
//         const data = JSON.parse(payload.toString());
//         console.log("📊 Real-time Data Received:", data);
//     } catch (error) {
//         console.error("❌ Error parsing received data:", error);
//     }
// });


// import awsIot from "aws-iot-device-sdk";

// // AWS IoT Core Device Configuration
// const device = awsIot.device({
//     keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
//     certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
//     caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
//     clientId: "Testdata_" + Math.random().toString(16).substr(2, 8),  // Unique Client ID
//     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
//     keepalive: 60,
//     clean: false,  // Keep session active for multiple subscribers
// });

// // Topics to Subscribe
// const topics = ["newpol", "sensor/data"];

// // Connect to AWS IoT Core
// device.on("connect", () => {
//     console.log("✅ Connected to AWS IoT Core");

//     // Subscribe to multiple topics
//     topics.forEach((topic) => {
//         device.subscribe(topic, { qos: 1 }, (err, granted) => {
//             if (err) {
//                 console.error(`❌ Subscription Error for ${topic}:`, err);
//             } else {
//                 console.log(`📡 Subscribed to topic: ${granted[0].topic}`);
//             }
//         });
//     });
// });

// // Debugging Event Listeners
// device.on("error", (error) => {
//     console.error("❌ Device Error:", error);
// });

// device.on("close", () => {
//     console.warn("⚠ Connection closed");
// });

// device.on("reconnect", () => {
//     console.warn("🔄 Reconnecting...");
// });

// device.on("offline", () => {
//     console.warn("🚫 Device went offline");
// });

// // Event listener for receiving messages
// device.on("message", (topic, payload) => {
//     console.log(`📥 Received message on topic '${topic}': ${payload.toString()}`);

//     try {
//         const data = JSON.parse(payload.toString());
//         console.log("📊 Real-time Data Received:", data);
//     } catch (error) {
//         console.error("❌ Error parsing received data:", error);
//     }
// });

// import express from "express";
// import { Server } from "socket.io";
// import { createServer } from "http";
// import path from "path";
// import awsIot from "aws-iot-device-sdk";

// // Initialize Express App
// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// // Middleware & Static Files
// app.use(express.static(path.join(path.resolve(), "public")));
// app.set("view engine", "ejs");
// app.set("views", path.join(path.resolve(), "views"));

// // AWS IoT Core Configuration
// const device = awsIot.device({
//     keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
//     certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
//     caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
//     clientId: "Testdata_" + Math.random().toString(16).substr(2, 8),
//     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
//     keepalive: 60,
//     clean: false,
// });

// // Topics
// const topics = ["newpol", "newpol1"];

// // Connect to AWS IoT Core
// device.on("connect", () => {
//     console.log("✅ Connected to AWS IoT Core");

//     topics.forEach((topic) => {
//         device.subscribe(topic, { qos: 1 }, (err, granted) => {
//             if (err) {
//                 console.error(`❌ Subscription Error for ${topic}:`, err);
//             } else {
//                 console.log(`📡 Subscribed to topic: ${granted[0].topic}`);
//             }
//         });
//     });
// });

// // Real-time Data Handling
// device.on("message", (topic, payload) => {
//     const data = JSON.parse(payload.toString());

//     if (topic === "newpol") {
//         console.log("🥗 Food Data Received:", data);
//         io.emit("foodData", data);
//     } else if (topic === "newpol1") {
//         console.log("🏭 Machine Data Received:", data);
//         io.emit("machineData", data);
//     }
// });

// // Routes
// app.get("/", (req, res) => res.render("index"));
// app.get("/chart", (req, res) => res.render("chart"));
// app.get("/analytics", (req, res) => res.render("analytics"));

// // Start Server
// const PORT = 3000;
// server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


// import express from "express";
// import { Server } from "socket.io";
// import { createServer } from "http";
// import path from "path";
// import awsIot from "aws-iot-device-sdk";

// // Initialize Express App
// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// // Middleware & Static Files
// app.use(express.static(path.join(path.resolve(), "public")));
// app.set("view engine", "ejs");
// app.set("views", path.join(path.resolve(), "views"));

// // AWS IoT Core Configuration
// const device = awsIot.device({
//     keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
//     certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
//     caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
//     clientId: "Testdata_" + Math.random().toString(16).substr(2, 8),
//     host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
//     keepalive: 60,
//     clean: false,
// });

// // Topics
// const topics = ["newpol", "newpol1"];

// // Connect to AWS IoT Core
// device.on("connect", () => {
//     console.log("✅ Connected to AWS IoT Core");

//     topics.forEach((topic) => {
//         device.subscribe(topic, { qos: 1 }, (err, granted) => {
//             if (err) {
//                 console.error(`❌ Subscription Error for ${topic}:`, err);
//             } else {
//                 console.log(`📡 Subscribed to topic: ${granted[0].topic}`);
//             }
//         });
//     });
// });

// // Real-time Data Handling
// device.on("message", (topic, payload) => {
//     const data = JSON.parse(payload.toString());

//     if (topic === "newpol") {
//         console.log("🥗 Food Data Received:", data);
//         io.emit("foodData", data);
//     } else if (topic === "newpol1") {
//         console.log("🏭 Machine Data Received:", data);
//         io.emit("machineData", data);
//     }
// });

// // Routes
// app.get("/", (req, res) => res.render("index"));
// app.get("/chart", (req, res) => res.render("chart"));
// app.get("/analytics", (req, res) => res.render("analytics"));

// // Start Server
// const PORT = 3000;
// server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


import awsIot from "aws-iot-device-sdk";

// AWS IoT Core Device Configuration
const device = awsIot.device({
    keyPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/private.pem.key",
    certPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/certificate.pem.crt",
    caPath: "C:/Users/gaura/OneDrive/Desktop/aws-final/AmazonRootCA1.pem",
    clientId: "Testdata_" + Math.random().toString(16).substr(2, 8),  // Unique Client ID
    host: "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com",
    keepalive: 60,
    clean: false,  // Keep session active for multiple subscribers
});

// Topics for Machine & Food Data
const topics = ["newpol", "newpol1"];

// Connect to AWS IoT Core
device.on("connect", () => {
    console.log("✅ Connected to AWS IoT Core");

    // Subscribe to both topics
    topics.forEach((topic) => {
        device.subscribe(topic, { qos: 1 }, (err, granted) => {
            if (err) {
                console.error(`❌ Subscription Error for ${topic}:`, err);
            } else {
                console.log(`📡 Subscribed to topic: ${granted[0].topic}`);
            }
        });
    });
});

// Debugging Event Listeners
device.on("error", (error) => console.error("❌ Device Error:", error));
device.on("close", () => console.warn("⚠ Connection closed"));
device.on("reconnect", () => console.warn("🔄 Reconnecting..."));
device.on("offline", () => console.warn("🚫 Device went offline"));

// Event Listener for Receiving Messages
device.on("message", (topic, payload) => {
    console.log(`📥 Received message on topic '${topic}': ${payload.toString()}`);

    try {
        const data = JSON.parse(payload.toString());

        if (topic === "newpol1") {
            console.log("🏭 Machine Data Received:");
            console.log(`🔹 Timestamp: ${data.timestamp}`);
            console.log(`🔹 Temperature: ${data.temperature}°C`);
            console.log(`🔹 Humidity: ${data.humidity}%`);
        } else if (topic === "newpol") {
            console.log("🥗 Food Data Received:");
            console.log(`🔹 Unique ID: ${data["unique id"]}`);
            console.log(`🔹 Food Name: ${data["food name"]}`);
            console.log(`🔹 Timestamp: ${data.timestamp}`);
            console.log(`🔹 Gas Level: ${data["gas level"]}`);
            console.log(`🔹 Status: ${data.status}`);
        }
    } catch (error) {
        console.error("❌ Error parsing received data:", error);
    }
});
