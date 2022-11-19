from unicodedata import name
import requests

url='https://pokeapi.co/api/v2/pokemon-form/132/'

response = requests.get(url)
if response.status_code == 200:
    lista=response.json()
    names = lista.get('name',[])
    print(lista['name'])


url1 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'

response = requests.get(url1,stream=True)
with open('pokemon_back.jpg','wb') as file:
    for data in response.iter_content():
        file.write(data)
response.close()

url2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'

response = requests.get(url2,stream=True)
with open('pokemon_front.jpg','wb') as file:
    for data in response.iter_content():
        file.write(data)
response.close()                