import requests
from flask import Flask, render_template
app = Flask(__name__)

app.debug = True

ENDPOINT = "http://mgoblog.com/mobileservices"

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/homepage/<int:page>")
def fetch_homepage(page):
    return requests.get(ENDPOINT + "/node.json?parameters[sticky]=0&parameters[promote]=1&page={page}".format(page=page)).content

@app.route("/boards/<int:page>")
def fetch_boards(page):
    return requests.get(ENDPOINT + "/node.json?parameters[sticky]=0&page={page}".format(page=page)).content

@app.route("/post/<int:post_id>")
def fetch_post(post_id):
    return requests.get(ENDPOINT + "/node/{post_id}.json".format(post_id=post_id)).content

@app.route("/comments/<int:post_id>")
def fetch_comments(post_id):
    return requests.get(ENDPOINT + "/node/{post_id}/comments.json".format(post_id=post_id)).content

if __name__ == "__main__":
    app.run()
