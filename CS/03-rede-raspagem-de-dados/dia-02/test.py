import requests

response = requests.get("https://www.betrybe.com/")
print("STATUS CODE: ", response.status_code)
print("TIPO DO ARQUIVO: ", response.headers["Content-Type"])

# print("HTML: ", response.text)

response2 = requests.post("http://httpbin.org/post", data="some content")
print(response2.text)
