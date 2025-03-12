import paho.mqtt.client as mqtt
import pandas as pd
import time
import json
import ssl

# AWS IoT details
ENDPOINT = "a6j4hc4ok392w-ats.iot.eu-central-1.amazonaws.com"  
THING_NAME = "Testdata"
TOPIC = "newpol1"   
CERTIFICATE_PATH = r"C:\Users\91979\Desktop\AWS_CLOUD\certificate.pem.crt"
PRIVATE_KEY_PATH = r"C:\Users\91979\Desktop\AWS_CLOUD\private.pem.key"
ROOT_CA_PATH = r"C:\Users\91979\Desktop\AWS_CLOUD\AmazonRootCA1.pem"

# MQTT Client setup
client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2, client_id=THING_NAME)
client.tls_set(ca_certs=ROOT_CA_PATH, certfile=CERTIFICATE_PATH, keyfile=PRIVATE_KEY_PATH, tls_version=ssl.PROTOCOL_TLSv1_2)

# Connect to AWS IoT Core
client.connect(ENDPOINT, 8883, 60)

# Function to read data from Excel and send to AWS IoT
def publish_data():
    while True:
        df = pd.read_excel(r"C:\Users\91979\Desktop\AWS_CLOUD\modified_food_freshness_data.xlsx")  # Read Excel file
       
        for _, row in df.iterrows():
            payload = {
                
                "timestamp": row["Timestamp"],  # Timestamp of data entry
                "temperature_celsius": float(row["Temperature (°C)"]),  # Temperature in Celsius
                "humidity_percent": float(row["Humidity (%)"])  # Humidity in percentage
            }

            client.publish(TOPIC, json.dumps(payload))  
            print(f"Published: {payload}")
            time.sleep(5)  # Adjust interval as needed

try:
 publish_data()
except KeyboardInterrupt:
    print("Stopped sending data")
    client.disconnect()
