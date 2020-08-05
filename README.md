# Bitcoin Market Value Prediction

## O que faz:

Através do fornecimento dos valores de abertura do mercado no dia, alta e baixa da moeda bem como seu valor de fechamento e volume - podemos predizer o valor de mercado do Bitcoin!

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

Fazendo uso do notebook *training.ipynb*, treinamos o algoritmo de machine learning (KNN) e criamos um arquivo joblib persistence para sklearn, na pasta service

## Fazendo uso

Para executar, faz-se uso do Docker. Faz-se necessario executar o build e, logo em seguida, o up.

Ir para http://localhost:5000

```
$ docker-compose build
```

```
$ docker-compose up
```