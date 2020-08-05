# Robot Mission Deploy

## Requirements

* Scrapy
* Scikit-learn
* Jupyter notebook
* Docker (docker-compose)

Below is the list of commands used in a Ubuntu 20.04 LTS distro

```
$ pip3 install scrapy scikit-learn jupyter
# apt install docker-compose
```


## Running scraper with scrapy


To run the spider, use the following code in the *crawler* folder:

```
$ scraper runspider scraper.py
```

Confirming that it works, we are going to export the data to a CSV file:

```
$ scraper runspider scraper.py -o data.csv
```

## Training

Using the notebook *training.ipynb*, we train a machine learning algorithm and generate a joblib persistence file for sklearn in the *service* folder

## Deploying Application

To run the application, we are using Docker, the first time running requires docker to build the service. In the project's root directory, run:

```
$ docker-compose build
```

To bring the application up, running it in a browser through http://localhost:5000, do:

```
$ docker-compose up
```