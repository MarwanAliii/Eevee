from flask import Flask
from flask_cors import CORS
from routes.stations import station_routes
from routes.reports import report_routes

app = Flask(__name__)
CORS(app)

# Register routes
app.register_blueprint(station_routes, url_prefix="/stations")
app.register_blueprint(report_routes, url_prefix="/reports")

@app.route("/")
def home():
    return {"message": "Backend is running!"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)
