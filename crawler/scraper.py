from selenium import webdriver
import requests
import bs4
import csv

dateList=[]
openList=[]
highList=[]
lowList=[]
closeList=[]
volumeList=[]
marketCapList=[]

r = requests.get('https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20130428&end=20190423')
soup = bs4.BeautifulSoup(r.text, "lxml")

tr = soup.find_all('tr',{'class': 'cmc-table-row'})
for item in tr:

  dateList.append(item.find('td', {'class': 'cmc-table__cell cmc-table__cell--sticky cmc-table__cell--left'}).text)
  openList.append(item.find_all('td')[1].text)
  highList.append(item.find_all('td')[2].text)
  lowList.append(item.find_all('td')[3].text)
  closeList.append(item.find_all('td')[4].text)
  volumeList.append(item.find_all('td')[5].text)
  marketCapList.append(item.find_all('td')[6].text)


row0=['date','open','high','low','close','volume','market cap']
rows = zip(dateList,openList,highList,lowList,closeList,volumeList,marketCapList)
with open('coinmarketExample.csv','w',encoding='utf-8',newline='')as csvfile:
    links_writer=csv.writer(csvfile)
    links_writer.writerow(row0)
    for item in rows:
        links_writer.writerow(item)