# Bitcoin Market Value Prediction

## O que precisa:

* Scrapy
* Scikit-learn
* Jupyter notebook
* Docker (docker-compose)

Lista de comandos (usado no Ubuntu 20.04 LTS)

```
$ pip3 install scrapy scikit-learn jupyter
# apt install docker-compose
```


## Executando o scraper com BeautifulSoup


Para executar o scraper.py - use o comando abaixo dentro do arquivo crawler:

```
$ python3 scraper.py
```

## Treinamento

Using the notebook *training.ipynb*, we train a machine learning algorithm and generate a joblib persistence file for sklearn in the *service* folder

Fazendo uso do notebook *training.ipynb*, treinamos o algoritmo de machine learning e criamos um arquivo joblib persistence para sklearn, na pasta service

## Fazendo uso

Para executar, faz-se uso do Docker. Faz-se necessario executar o build e, logo em seguida, o up.

Ir para http://localhost:5000

```
$ docker-compose build
```

```
$ docker-compose up
```