from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>I like to use Flast and Docker yay</h2>'

if __name__ == "__main__":
    app.run(debug=True)